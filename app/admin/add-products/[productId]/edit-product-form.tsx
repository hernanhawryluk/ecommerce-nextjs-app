"use client";

import Button from "@/app/components/button";
import Header from "@/app/components/heading";
import CategoryInput from "@/app/components/inputs/category-input";
import CustomCheckbox from "@/app/components/inputs/custom-checkbox";
import Input from "@/app/components/inputs/input";
import SelectColor from "@/app/components/inputs/select-color";
import TextArea from "@/app/components/inputs/text-area";
import { categories } from "@/utils/categories";
import { colors } from "@/utils/colors";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import firebaseApp from "@/libs/firebase";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Product } from "@prisma/client";

export type ImageType = {
  color: string;
  colorCode: string;
  image: File | null;
};

export type UploadedImageType = {
  color: string;
  colorCode: string;
  image: string;
};

const EditProductForm = ({ product }: { product: Product }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<ImageType[] | null>();
  const [oldImages, setOldImages] = useState<UploadedImageType[]>();

  useEffect(() => {
    setCustomValue("name", product.name);
    setCustomValue("description", product.description);
    setCustomValue("brand", product.brand);
    setCustomValue("category", product.category);
    setCustomValue("inStock", product.inStock);
    setCustomValue("price", product.price);
    setCustomValue("list", product.list);
    setOldImages(product.images);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      inStock: false,
      images: [],
      price: "",
      list: "",
    },
  });

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  useEffect(() => {
    setCustomValue("images", images);
  }, [images]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    let uploadedImages: UploadedImageType[] = [];

    if (!data.category) {
      setIsLoading(false);
      return toast.error("Category is not selected!");
    }

    if (oldImages?.length === 0) {
      setIsLoading(false);
      return toast.error("No selected image!");
    }

    if (data.images && data.images.length > 0) {
      const handleImageUploads = async () => {
        toast("Editing product, please wait...");
        try {
          for (const item of data.images) {
            if (item.image) {
              const fileName = new Date().getTime() + "-" + item.image.name;
              const storage = getStorage(firebaseApp);
              const storageRef = ref(storage, `products/${fileName}`);
              const uploadTask = uploadBytesResumable(storageRef, item.image);

              await new Promise<void>((resolve, reject) => {
                uploadTask.on(
                  "state_changed",
                  (snapshot) => {
                    const progress =
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                      case "paused":
                        console.log("Upload is paused");
                        break;
                      case "running":
                        console.log("Upload is running");
                        break;
                    }
                  },
                  (error) => {
                    console.log("Error uploading image", error);
                    reject(error);
                  },
                  () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                      .then((downloadURL) => {
                        uploadedImages.push({
                          ...item,
                          image: downloadURL,
                        });
                        console.log("File available at", downloadURL);
                        resolve();
                      })
                      .catch((error) => {
                        console.log("Error getting the download URL", error);
                        reject(error);
                      });
                  }
                );
              });
            }
          }
        } catch (error) {
          setIsLoading(false);
          console.log("Error handling image uploads", error);
          return toast.error("Error handling image uploads");
        }
      };
      await handleImageUploads();
    }

    const list = data.list === "" || data.list === 0 ? data.price : data.list;

    const mergedImages = [...product.images, ...uploadedImages];

    const productData = {
      ...data,
      images: mergedImages,
      list: list,
    };

    axios
      .put("/api/product/" + product.id, productData)
      .then(() => {
        toast.success("Product edited successfully");
        router.back();
      })
      .catch((error) => {
        toast.error("Oops! Something went wrong.");
        console.log("Error creating product", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const category = watch("category");

  const addImageToState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (!prev) {
        return [value];
      }

      return [...prev, value];
    });
  }, []);

  const removeImageFromState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (prev) {
        const filteredImages = prev.filter(
          (item) => item.color !== value.color
        );
        return filteredImages;
      }

      return prev;
    });
  }, []);

  return (
    <>
      <Header title="Edit a Product" center />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <div className="flex w-full gap-3">
        <Input
          id="price"
          label="Price"
          disabled={isLoading}
          register={register}
          errors={errors}
          type="number"
          required
        />
        <Input
          id="list"
          label="List"
          disabled={isLoading}
          register={register}
          errors={errors}
          type="number"
        />
      </div>
      <Input
        id="brand"
        label="Brand"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <TextArea
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <CustomCheckbox
        id="inStock"
        register={register}
        label="This product is in stock"
      />
      <div className="w-full font-medium">
        <div className="mb-2 font-semibold">Select a Category</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h[50vh] overfolow-y-auto">
          {categories.map((item) => {
            if (item.label === "All") {
              return null;
            }

            return (
              <div key={item.label} className="col-span">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-col flex-wrap gap-4 mt-5">
          <div>
            <div className="font-bold">
              Select the available product colors and upload their images.
            </div>
            <div className="text-small">
              You must upload an image for each of the color selected otherwise
              your color selection will be ignored.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {colors.map((item, index) => {
              return (
                <SelectColor
                  key={index}
                  item={item}
                  addImageToState={addImageToState}
                  removeImageFromState={removeImageFromState}
                  isProductCreated={false}
                  previousImages={product.images.filter((image) => {
                    if (image.color === item.color) {
                      return image;
                    }
                  })}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Button
        label={isLoading ? "Loading..." : "Save Product"}
        disabled={isLoading}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default EditProductForm;
