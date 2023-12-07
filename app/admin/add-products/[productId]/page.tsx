import Container from "@/app/components/container";
import FormWrap from "@/app/components/form-wrap";
import EditProductForm from "./edit-product-form";
import getCurrentUser from "@/actions/get-current-user";
import NullData from "@/app/components/null-data";
import getProductById from "@/actions/get-product-by-id";
import { CircularProgress } from "@mui/material";

const EditProducts = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  const currentUser = await getCurrentUser();
  const product = await getProductById({ productId });

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }

  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          {product ? (
            <EditProductForm product={product} />
          ) : (
            <CircularProgress />
          )}
        </FormWrap>
      </Container>
    </div>
  );
};

export default EditProducts;
