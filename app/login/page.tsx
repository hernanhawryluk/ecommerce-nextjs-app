import Container from "../components/container";
import FormWrap from "../components/form-wrap";
import LoginForm from "./login-form";

const Login = () => {
  return (
    <Container>
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </Container>
  );
};

export default Login;
