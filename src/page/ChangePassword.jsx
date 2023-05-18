import { Form, useNavigate, useActionData } from "react-router-dom";
import Button from "../component/UI/Button";
import Input from "../component/UI/Input";
import { getAuthToken } from "../utils/auth";
import styles from "./ChangePassword.module.css";
function ChangePassword() {
  const data = useActionData();
  const navigate = useNavigate();
  console.log(data);
  function cancelHandler() {
    navigate("../..");
  }
  return (
    <div className={styles.container}>
      <Form method="post">
        <Input
          name="currentPassword"
          label="Current password"
          type="password"
          placeholder="Type your current password"
        ></Input>
        <Input
          name="newPassword"
          label="New password"
          type="password"
          placeholder="Type your new password"
        ></Input>
        <Input
          name="confirmPassword"
          label="Confirm password"
          type="password"
          placeholder="Confirm your new password"
        ></Input>
        <div className={styles.button}>
          <span>
            <Button value="Save" styles="save"></Button>
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
    currentPassword: data.get("currentPassword"),
    newPassword: data.get("newPassword"),
    confirmPassword: data.get("confirmPassword"),
  };

  // const token = getAuthToken();
  // Authorization: "Bearer " + token,
  // const response = await fetch("",{
  //   method: "PATCH",
  //   headers: {
  //     "content-type": "application/json",
  //     Authorization: "Bearer " + token,
  //   },
  //   body: JSON.stringify(userPassword)
  // })

  // if (response.status === 401) {
  //   return response;
  // }
  // if (!response.ok) {
  //   throw json({ message: "Could not change password" }, { status: 500 });
  // }
  return userPassword;
};
