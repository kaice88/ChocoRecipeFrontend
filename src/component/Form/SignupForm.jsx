import { Form, useActionData } from "react-router-dom";
import ButtonAuth from "../UI/ButtonAuth";
import Input from "../UI/Input";
import styles from "./Form.module.css";

function SignUpForm() {
  const data = useActionData();
  return (
    <Form method="post">
      <div>
        <Input
          name="first_name"
          label="First name"
          type="text"
          placeholder="Type your first name"
        ></Input>
        <Input
          name="last_name"
          label="Last name"
          type="text"
          placeholder="Type your last name"
        ></Input>
        <Input
          name="email"
          label="Email"
          type="text"
          placeholder="Type your email address"
        ></Input>
        {data && data.email && <h3 className={styles.error}>{data.email}</h3>}
        <Input
          name="username"
          label="Username"
          type="text"
          placeholder="Type your username"
        ></Input>
        {data && data.username && (
          <h3 className={styles.error}>{data.username}</h3>
        )}
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="Type your password"
        ></Input>
        {data && data.password && (
          <h3 className={styles.error}>{data.password}</h3>
        )}
        <Input
          name="password2"
          label="Confirm password"
          type="password"
          placeholder="Confirm your password"
        ></Input>
        {data && data.password2 && (
          <h3 className={styles.error}>{data.password2}</h3>
        )}
      </div>
      <ButtonAuth value="Sign up"></ButtonAuth>
    </Form>
  );
}

export default SignUpForm;
