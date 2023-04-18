import { json, redirect } from "react-router-dom";
import authImage from "../assets/cake.jpg";
import Tab from "../component/UI/Tab";
import LoginForm from "../component/Form/LoginForm";
import styles from "./Login.module.css";
import { userAction } from "../store/user-slice";

function Login(props) {
  const tab_list = [
    { value: "Log in", isActive: true, route: "login" },
    { value: "Sign up", isActive: false, route: "signup" },
  ];

  return (
    <section>
      <div className={styles.image}>
        <img alt="login-signup" src={authImage}></img>
      </div>
      <div className={styles.content}>
        <div className={styles.body}>
          <Tab
            className={styles.tab}
            tab_list={tab_list}
            weight="800"
            size="24px"
            flexDirection="row"
            height="30px"
          ></Tab>
          <LoginForm></LoginForm>
        </div>
      </div>
    </section>
  );
}

export default Login;
export const action = async ({ request }) => {
  const data = await request.formData();
  const authUser = {
    username: data.get("Username"),
    password: data.get("Password"),
  };

  const response = await fetch("http://127.0.0.1:8000/auth/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(authUser),
  });
  if (!response.ok) {
    throw json({ message: "Could not authenticate user" }, { status: 500 });
  }
  const res = await response.json();
  const token = res.token;
  localStorage.setItem("token", token);

  return redirect("/");
};
