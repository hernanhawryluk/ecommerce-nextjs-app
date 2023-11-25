import Container from "@/app/components/container";
import ManageProductsClient from "./manage-products-client";
import getProducts from "@/actions/get-products";
import getCurrentUser from "@/actions/get-current-user";
import NullData from "@/app/components/null-data";

const ManageProducts = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <ManageProductsClient products={products} />
      </Container>
    </div>
  );
};

export default ManageProducts;
