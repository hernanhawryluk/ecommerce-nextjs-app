import OrderItem from "./order-item";
import { Order } from "@prisma/client";

interface OrderGridProps {
  order: Order;
}

const OrderGrid: React.FC<OrderGridProps> = ({ order }) => {
  return (
    <div>
      <h2 className="font-semibold mt-4 mb-2">Products ordered</h2>
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      {order.products &&
        order.products.map((item) => {
          return <OrderItem key={item.id} item={item} />;
        })}
    </div>
  );
};

export default OrderGrid;
