import { CartProductType } from "@/app/product/[productId]/product-details";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type CartContextType = {
  cartTotalQuantity: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
};

interface Props {
  [propName: string]: any;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = (props: Props) => {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  useEffect(() => {
    const storage: any = localStorage.getItem("cartItems");
    const storageCartProducts: CartProductType[] | null = JSON.parse(storage);

    setCartProducts(storageCartProducts);
  }, []);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const value = {
    cartTotalQuantity,
    cartProducts,
    handleAddProductToCart,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};
