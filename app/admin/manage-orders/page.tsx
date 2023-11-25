import Container from "@/app/components/container";
import ManageOrdersClient from "./manage-orders-client";
import getCurrentUser from "@/actions/get-current-user";
import NullData from "@/app/components/null-data";
import getOrders from "@/actions/get-orders";

const ManageOrders = async () => {
  const orders = await getOrders();
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <ManageOrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default ManageOrders;
