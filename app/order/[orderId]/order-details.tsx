"use client";

import Heading from "@/app/components/heading";
import Status from "@/app/components/status";
import { formatPrice } from "@/utils/format-price";
import { Order } from "@prisma/client";
import moment from "moment";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div className="mt-8 mb-10 max-w-[1150px] flex flex-col sm:flex-row">
      <div className="flex flex-col gap-2 sm:w-1/2 mb-8">
        <div className="mb-2">
          <Heading title="Order Details" />
        </div>
        <div>Order ID: {order.id}</div>
        <div>
          Total Amount:{" "}
          <span className="font-bold">{formatPrice(order.amount / 100)}</span>
        </div>
        <div className="flex gap-2 items-center">
          <div>Payment status:</div>
          <div>
            {order.status === "pending" ? (
              <Status
                text="pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : (
              order.status === "complete" && (
                <Status
                  text="completed"
                  icon={MdDone}
                  bg="bg-green-200"
                  color="text-green-700"
                />
              )
            )}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>Delivery status:</div>
          <div>
            {order.deliveryStatus === "pending" ? (
              <Status
                text="pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : order.deliveryStatus === "dispatched" ? (
              <Status
                text="dispatched"
                icon={MdDeliveryDining}
                bg="bg-purple-200"
                color="text-purple-700"
              />
            ) : (
              order.deliveryStatus === "delivered" && (
                <Status
                  text="delivered"
                  icon={MdDone}
                  bg="bg-green-200"
                  color="text-green-700"
                />
              )
            )}
          </div>
        </div>
        <div>Date: {moment(order.createDate).fromNow()}</div>
      </div>
      <div className="flex flex-col gap-2 sm:w-1/2">
        <div className="mb-2">
          <Heading
            title={
              order.deliveryStatus === "delivered"
                ? "Delivered Address"
                : "Delivery Address"
            }
          />
        </div>
        <div>Line 1: {order.address?.line1}</div>
        {order.address?.city !== "" && <div>Line 2: {order.address?.city}</div>}
        <div>State: {order.address?.state}</div>
        <div>Country Code: {order.address?.country}</div>
        <div>Postal Code: {order.address?.postalCode}</div>
      </div>
    </div>
  );
};

export default OrderDetails;
