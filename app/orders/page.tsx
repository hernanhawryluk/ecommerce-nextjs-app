import Container from "@/app/components/container";
import OrdersClient from "./orders-client";
import getCurrentUser from "@/actions/get-current-user";
import NullData from "@/app/components/null-data";
import getOrdersByUserId from "@/actions/get-orders-by-user-id";

const Orders = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <NullData title="Oops! Access denied" />;
  }

  const orders = await getOrdersByUserId(currentUser.id);

  if (!orders) {
    return <NullData title="No orders yet..." />;
  }

  return (
    <div className="pt-8 pb-8">
      <Container>
        <OrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
