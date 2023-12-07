"use client";

import { ImageType } from "@/app/admin/add-products/add-product-form";
import { useCallback, useEffect, useState } from "react";
import SelectImage from "./select-image";
import Button from "../button";
import { SelectedImgType } from "@/app/product/[productId]/product-details";

interface SelectColorsProps {
  item: ImageType;
  addImageToState: (value: ImageType) => void;
  removeImageFromState: (value: ImageType) => void;
  isProductCreated: boolean;
  previousImages?: SelectedImgType[];
}

const SelectColor: React.FC<SelectColorsProps> = ({
  item,
  addImageToState,
  removeImageFromState,
  isProductCreated,
  previousImages = [],
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [file, setFile] = useState<File | string | null>(null);

  useEffect(() => {
    if (isProductCreated) {
      setIsSelected(false);
      setFile(null);
    }
  }, [isProductCreated]);

  useEffect(() => {
    if (previousImages.length > 0) {
      setIsSelected(true);
      setFile(previousImages[0].image);
    }
  }, []);

  const handleFileChange = useCallback((value: File) => {
    setFile(value);
    addImageToState({ ...item, image: value });
  }, []);

  const handleCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(e.target.checked);

    if (!e.target.checked) {
      setFile(null);
      removeImageFromState(item);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 overflow-y-auto border-b-[1.2px] border-slate-200 items-center p-2">
      <div className="flex flex-row gap-2 items-center h-[60px]">
        <input
          id={item.color}
          type="checkbox"
          checked={isSelected}
          onChange={handleCheck}
          className="cursor-pointer h-[19px] w-[19px]"
        />
        <label htmlFor={item.color} className="font-medium cursor-pointer">
          {item.color}
        </label>
      </div>
      <>
        {isSelected && !file && (
          <div className="col-span-2 text-center">
            <SelectImage item={item} handleFileChange={handleFileChange} />
          </div>
        )}
        {file && (
          <div className="flex flex-row gap-2 text-sm col-span-2 items-center justify-between">
            <p>{typeof file === "string" ? "Uploaded Image" : file?.name}</p>
            <div className="w-[70px]">
              <Button
                label="Cancel"
                small
                outline
                onClick={() => {
                  setFile(null);
                  removeImageFromState(item);
                }}
              />
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default SelectColor;
