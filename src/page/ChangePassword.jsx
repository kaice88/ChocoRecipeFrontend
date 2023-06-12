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
import { useState, useEffect } from "react";
function ChangePassword() {
  const data = useActionData();
  const [password, setPassword] = useState({
    current: "",
    password1: "",
    password2: "",
  });
  useEffect(() => {
    if (data) {
      if (data.userPassword)
        setPassword({ current: "", password1: "", password2: "" });
    }
  }, [data]);
  const navigate = useNavigate();
  console.log(data);
  function cancelHandler() {
    navigate("../..");
  }
  return (
    <div className={styles.container}>
      <Form method="post">
        <Input
          error={data && data.current ? `${data.current}` : null}
          name="current"
          label="Current password"
          type="password"
          placeholder="Type your current password"
          value={password.current}
          onChange={(e) =>
            setPassword({ ...password, current: e.target.value })
          }
        ></Input>
        {data && data.current && (
          <h3 className={styles.error}>{data.current}</h3>
        )}
        <Input
          error={
            data && data.password1
              ? `${data.password1}`
              : data && data.password
              ? `${data.password}`
              : null
          }
          name="password1"
          label="New password"
          type="password"
          placeholder="Type your new password"
          value={password.password1}
          onChange={(e) =>
            setPassword({ ...password, password1: e.target.value })
          }
        ></Input>
        {data && data.password1 && (
          <h3 className={styles.error}>{data.password1}</h3>
        )}
        <Input
          error={
            data && data.password2
              ? `${data.password2}`
              : data && data.password
              ? `${data.password}`
              : null
          }
          name="password2"
          label="Confirm password"
          type="password"
          placeholder="Confirm your new password"
          value={password.password2}
          onChange={(e) =>
            setPassword({ ...password, password2: e.target.value })
          }
        ></Input>
        {data && data.password2 && (
          <h3 className={styles.error}>{data.password2}</h3>
        )}
        {data && data.password && (
          <h3 className={styles.error}>{data.password}</h3>
        )}
        <div className={styles.button}>
          <span>
            <Button type="submit" value="Save" styles="save"></Button>
          </span>
          <span>
            <Button value="Cancel" onClick={cancelHandler}></Button>
          </span>
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

  // const t = await response.json();
  if (response.status === 400) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not change password" }, { status: 500 });
  }

  return { userPassword };
};
// data.append("current", "");
// data.append("password1", "");
// data.append("password2", "");
// return redirect("/profile/change-pwd");
// return userPassword;
