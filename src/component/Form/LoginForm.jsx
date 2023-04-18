import { Form, useActionData } from "react-router-dom";
import ButtonAuth from "../UI/ButtonAuth";
import Input from "../UI/Input";

function LoginForm(props) {
  const data = useActionData();
  console.log(data);
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
          name="Username"
        ></Input>
        <Input
          name="Password"
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
