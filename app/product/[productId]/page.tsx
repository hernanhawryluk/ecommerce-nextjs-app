import Container from "@/app/components/container";
import ProductDetails from "./product-details";
import ListRating from "./list-rating";
import { products } from "@/utils/products";

interface ItemParams {
  productId: string;
}

const Product = ({ params }: { params: ItemParams }) => {
  const product = products.find((item) => item.id === params.productId);

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
