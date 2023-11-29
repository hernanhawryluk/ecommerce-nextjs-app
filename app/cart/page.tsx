import React from "react";
import Container from "../components/container";
import CartClient from "./cart-client";
import getCurrentUser from "@/actions/get-current-user";

const Cart = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="pt-8 px-0 sm:px-4 xl:px-0">
      <Container>
        <CartClient currentUser={currentUser} />
      </Container>
    </div>
  );
};

export default Cart;
