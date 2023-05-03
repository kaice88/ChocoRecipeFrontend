import { Form, useActionData } from "react-router-dom";
import ButtonAuth from "../UI/ButtonAuth";
import Input from "../UI/Input";
import styles from "./Form.module.css";
function LoginForm(props) {
  const data = useActionData();
  console.log(data);
  return (
    <Form method="post">
      <div>
        <Input
          error={data && data.username ? `${data.username}` : null}
          label="Username"
          type="text"
          placeholder="Type your username"
          name="username"
        ></Input>
        {data && data.username && (
          <h3 className={styles.error}>{data.username}</h3>
        )}
        <Input
          error={data && data.password ? `${data.password}` : null}
          name="password"
          label="Password"
          type="password"
          placeholder="Type your password"
        ></Input>
        {data && data.password && (
          <h3 className={styles.error}>{data.password}</h3>
        )}
      </div>
      {data && data.non_field_errors && (
        <h3 className={styles.error}>{data.non_field_errors}</h3>
      )}
      <ButtonAuth value="Log in"></ButtonAuth>
    </Form>
  );
}

export default LoginForm;
