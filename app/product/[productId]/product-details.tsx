"use client";

import { useCallback, useState } from "react";
import { Rating } from "@mui/material";
import { productRating } from "@/utils/product-rating";
import SetColor from "@/app/components/products/set-color";
import SetQuantity from "@/app/components/products/set-quantity";
import Button from "@/app/components/button";
import ProductImage from "@/app/components/products/product-image";
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <ProductImage
          cartProduct={cartProduct}
          product={product}
          handleColorSelect={handleColorSelect}
        />
      </div>
      <div className="flex flex-col gap-1 text-slate-400 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating(product.reviews)} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY:</span> {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND:</span> {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In stock" : "Out of stock"}
        </div>
        <Horizontal />
        <SetColor
          images={product.images}
          cartProduct={cartProduct}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <SetQuantity
          cartProduct={cartProduct}
          handleQuantityIncrease={handleQuantityIncrease}
          handleQuantityDecrease={handleQuantityDecrease}
        />
        <Horizontal />
        <div className="max-w-[300px]">
          <Button label="Add to Cart" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
