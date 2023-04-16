import { Form } from "react-router-dom";
import ButtonAuth from "../UI/ButtonAuth";
import Input from "../UI/Input";

function SignUpForm() {
  return (
    <Form method="post">
      <div>
        <Input
          label="Email"
          type="text"
          placeholder="Type your email address"
        ></Input>
        <Input
          label="Username"
          type="text"
          placeholder="Type your username"
        ></Input>
        <Input
          label="Password"
          type="password"
          placeholder="Type your password"
        ></Input>
      </div>
      <ButtonAuth value="Sign up"></ButtonAuth>
    </Form>
  );
}

export default SignUpForm;
