import Container from "@/app/components/container";
import ProductDetails from "./product-details";
import { product } from "@/utils/product";
import ListRating from "./list-rating";

interface IParams {
  productId: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log("params", params);
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
