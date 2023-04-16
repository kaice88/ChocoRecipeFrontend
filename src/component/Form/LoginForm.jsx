import { Form } from "react-router-dom";
import ButtonAuth from "../UI/ButtonAuth";
import Input from "../UI/Input";

function LoginForm(props) {
  return (
    <Form method="post">
      <div>
        {/* {props.input_list.map((input) => (
          <Input
            key={input.label}
            label={input.label}
            type={input.text}
            placeholder={input.placeholder}
          ></Input>
        ))} */}
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
      <ButtonAuth value="Log in"></ButtonAuth>
    </Form>
  );
}

export default LoginForm;
