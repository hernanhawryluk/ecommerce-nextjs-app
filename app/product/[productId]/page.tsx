import Container from "@/app/components/container";
import ProductDetails from "./product-details";
import ListRating from "./list-rating";
import getProductById from "@/actions/get-product-by-id";
import NullData from "@/app/components/null-data";
import AddRating from "./add-rating";
import getCurrentUser from "@/actions/get-current-user";

interface ItemParams {
  productId: string;
}

const Product = async ({ params }: { params: ItemParams }) => {
  const product = await getProductById(params);
  const user = await getCurrentUser();

  if (!product)
    return <NullData title="Oops! Product with the give id does not exist." />;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col-reverse sm:flex-row mt-12 sm:mt-20 gap-4">
          <div className="w-full sm:w-1/2">
            <AddRating product={product} user={user} />
          </div>
          <div className="sm:w-1/2">
            <ListRating product={product} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
