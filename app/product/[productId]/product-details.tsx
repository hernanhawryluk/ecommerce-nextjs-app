"use client";

import { useCallback, useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { productRating } from "@/utils/product-rating";
import SetColor from "@/app/components/products/set-color";
import SetQuantity from "@/app/components/products/set-quantity";
import Button from "@/app/components/button";
import ProductImage from "@/app/components/products/product-image";
import { useCart } from "@/context/cart-context";
import { MdCheckCircle, MdDone, MdOutlineClose } from "react-icons/md";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { formatPrice } from "@/utils/format-price";
import Status from "@/app/components/status";
interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { cartProducts, handleAddProductToCart } = useCart();
  const [isProductInCart, setIsProductInCart] = useState<boolean>(false);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });
  const router = useRouter();

  useEffect(() => {
    setIsProductInCart(false);

    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleQuantityIncrease = useCallback(() => {
    if (cartProduct.quantity === 99) return;

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  const handleQuantityDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) return;

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:mt-6">
      <div>
        <ProductImage
          cartProduct={cartProduct}
          product={product}
          handleColorSelect={handleColorSelect}
        />
      </div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm my-auto">
        <h2 className="text-3xl font-medium text-slate-700 mb-1">
          {product.name}
        </h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating(product.reviews)} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div className="flex flex-wrap justify-between">
          <div className="flex-col">
            <div className="mb-2">
              <span className="font-semibold">CATEGORY:</span>{" "}
              {product.category}
            </div>
            <div>
              <span className="font-semibold">BRAND:</span> {product.brand}
            </div>
          </div>

          <div className={`text-xl flex gap-2 sm:w-[50%] mt-1}`}>
            <span className="font-semibold text-sm pt-[5px]">STOCK:</span>
            <Status
              text={product.inStock ? "In stock" : "Out of stock"}
              icon={product.inStock ? MdDone : MdOutlineClose}
              bg={product.inStock ? "bg-teal-600" : "bg-pink-600"}
              color="text-white font-normal flex justify-center h-8"
            />
          </div>
        </div>
        <Horizontal />

        <div className="flex flex-col gap-1">
          <SetColor
            images={product.images}
            cartProduct={cartProduct}
            handleColorSelect={handleColorSelect}
          />
          <SetQuantity
            cartProduct={cartProduct}
            handleQuantityIncrease={handleQuantityIncrease}
            handleQuantityDecrease={handleQuantityDecrease}
          />

          <Horizontal />
          {product.list !== product.price && (
            <div className="flex flex-wrap font-normal text-md text-slate-400 gap-2 mb-1">
              <span className="line-through text-2xl">
                $ {formatPrice(product.list * cartProduct.quantity)}
              </span>
              <Status
                text={
                  Math.round(
                    ((product.list - product.price) / product.price) * 100
                  ) + "% OFF"
                }
                icon={MdDone}
                bg="bg-pink-600"
                color="text-white font-medium"
              />
            </div>
          )}
          <div className="flex gap-4 text-3xl text-slate-600 font-bold">
            <span>Total</span>
            <div>
              <span>$ </span>
              {formatPrice(product.price * cartProduct.quantity)}
            </div>
          </div>
          <Horizontal />

          {isProductInCart && (
            <p className="mt-1 text-slate-500 flex  items-center gap-1">
              <MdCheckCircle size={20} className="text-teal-500" />
              <span>Product added to cart</span>
            </p>
          )}
          <div className="max-w-[340px] mt-3">
            <Button
              label={
                !product.inStock
                  ? "Out of stock"
                  : isProductInCart
                  ? "View cart"
                  : "Add to cart"
              }
              disabled={!product.inStock}
              outline={isProductInCart}
              onClick={() => {
                if (isProductInCart) {
                  router.push("/cart");
                } else {
                  handleAddProductToCart(cartProduct);
                  toast.success("Product added to cart.");
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
