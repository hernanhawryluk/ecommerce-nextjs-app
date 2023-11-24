import Container from "@/app/components/container";
import FormWrap from "@/app/components/form-wrap";
import AddProductForm from "./add-product-form";
import getCurrentUser from "@/actions/get-current-user";
import NullData from "@/app/components/null-data";

const AddProducts = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }

  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddProductForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddProducts;
