import Container from "@/app/components/container";
import OrderDetails from "./order-details";
import getOrderById from "@/actions/got-order-by-id";
import NullData from "@/app/components/null-data";

interface ItemParams {
  orderId: string;
}

const Order = async ({ params }: { params: ItemParams }) => {
  const order = await getOrderById(params);

  if (!order) return <NullData title="No order" />;

  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
      </Container>
    </div>
  );
};

export default Order;
