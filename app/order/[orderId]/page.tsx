import Container from "@/app/components/container";
import OrderDetails from "./order-details";
import getOrderById from "@/actions/got-order-by-id";
import NullData from "@/app/components/null-data";
import OrderGrid from "./order-grid";

interface ItemParams {
  orderId: string;
}

const Order = async ({ params }: { params: ItemParams }) => {
  const order = await getOrderById(params);

  if (!order) return <NullData title="No order" />;

  return (
    <div className="p-1 sm:p-8">
      <Container>
        <OrderDetails order={order} />
        <OrderGrid order={order} />
      </Container>
    </div>
  );
};

export default Order;
