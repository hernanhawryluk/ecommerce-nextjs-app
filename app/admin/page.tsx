import getProducts from "@/actions/get-products";
import Summary from "./summary";
import getOrders from "@/actions/get-orders";
import getUsers from "@/actions/get-users";
import Container from "../components/container";
import BarGraph from "./bar-graph";
import getGraphData from "@/actions/get-graph-data";

const Admin = async () => {
  const products = await getProducts({ category: null });
  const orders = await getOrders();
  const users = await getUsers();
  const graphData = await getGraphData();

  return (
    <div className="pt-8">
      <Container>
        <Summary products={products} orders={orders} users={users} />
        <div className="mt-8 p-4 border-2 rounded-xl mx-auto max-w-[1150px]">
          <BarGraph data={graphData} />
        </div>
      </Container>
    </div>
  );
};

export default Admin;
