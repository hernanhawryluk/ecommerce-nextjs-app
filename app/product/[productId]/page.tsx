import Container from "@/app/components/container";
import ProductDetails from "./product-details";
import ListRating from "./list-rating";
import { products } from "@/utils/products";
import getProductById from "@/actions/get-product-by-id";
import NullData from "@/app/components/null-data";

interface ItemParams {
  productId: string;
}

const Product = async ({ params }: { params: ItemParams }) => {
  const product = await getProductById(params);

  if (!product)
    return <NullData title="Oops! Product with the give id does not exist." />;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <div>
            <ListRating product={product} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
