import getCurrentUser from "@/actions/get-current-user";
import Container from "../components/container";
import FormWrap from "../components/form-wrap";
import LoginForm from "./login-form";

const Login = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <FormWrap>
        <LoginForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default Login;
