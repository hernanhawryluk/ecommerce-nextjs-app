import Container from "../components/container";
import FormWrap from "../components/form-wrap";
import CheckoutClient from "./checkout-client";

const Checkout = () => {
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <CheckoutClient />
        </FormWrap>
      </Container>
    </div>
  );
};

export default Checkout;
