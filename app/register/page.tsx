import { getCurrentUser } from "@/actions/get-current-user";
import Container from "../components/container";
import FormWrap from "../components/form-wrap";
import RegisterForm from "./register-form";

const Register = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <FormWrap>
        <RegisterForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default Register;
