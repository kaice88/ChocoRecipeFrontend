import {
  Form,
  useNavigate,
  useActionData,
  json,
  redirect,
} from "react-router-dom";
import Button from "../component/UI/Button";
import Input from "../component/UI/Input";
import { getAuthToken } from "../utils/auth";
import styles from "./ChangePassword.module.css";
function ChangePassword() {
  const data = useActionData();
  const navigate = useNavigate();
  console.log(data);
  // function cancelHandler() {
  //   navigate("../..");
  // }
  return (
    <div className={styles.container}>
      <Form method="post">
        <Input
          name="current"
          label="Current password"
          type="password"
          placeholder="Type your current password"
        ></Input>
        <Input
          name="password1"
          label="New password"
          type="password"
          placeholder="Type your new password"
        ></Input>
        <Input
          name="password2"
          label="Confirm password"
          type="password"
          placeholder="Confirm your new password"
        ></Input>
        <div className={styles.button}>
          <span>
            <Button type="submit" value="Save" styles="save"></Button>
          </span>
          {/* <span>
            <Button value="Cancel" onClick={cancelHandler}></Button>
          </span> */}
        </div>
      </Form>
    </div>
  );
}

export default ChangePassword;
export const action = async ({ request, params }) => {
  const data = await request.formData();
  const userPassword = {
    current: data.get("current"),
    password1: data.get("password1"),
    password2: data.get("password2"),
  };

  const token = getAuthToken();
  const id = localStorage.getItem("id");
  const response = await fetch(
    `http://127.0.0.1:8000/users/${id}/change_password`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(userPassword),
    }
  );

  const t = await response.json();
  if (response.status === 400) {
    return { t, userPassword };
  }
  if (!response.ok) {
    throw json({ message: "Could not change password" }, { status: 500 });
  }
  return redirect("/");
  // return userPassword;
};
