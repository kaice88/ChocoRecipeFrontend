import { json, redirect } from "react-router-dom";
import LoginForm from "../component/Form/LoginForm";

function Login(props) {
  return (
    <>
      <LoginForm></LoginForm>
    </>
    // <section className={styles.login}>
    //   <div className={styles.image}>
    //     <img alt="login-signup" src={authImage}></img>
    //   </div>
    //   <div className={styles.content}>
    //     <div className={styles.body}>
    //       <Tab
    //         className={styles.tab}
    //         tab_list={tab_list}
    //         weight="800"
    //         size="24px"
    //         flexDirection="row"
    //         height="30px"
    //       ></Tab>
    //       <LoginForm></LoginForm>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Login;
export const action = async ({ request }) => {
  const data = await request.formData();
  const authUser = {
    username: data.get("username"),
    password: data.get("password"),
  };

  const response = await fetch("http://127.0.0.1:8000/auth/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(authUser),
  });
  if (response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not authenticate user" }, { status: 500 });
  }
  const res = await response.json();
  const token = res.access;
  const id = res.user_id;
  localStorage.setItem("id", id);
  localStorage.setItem("token", token);

  return redirect("/");
};
