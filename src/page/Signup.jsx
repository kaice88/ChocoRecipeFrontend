import { json, redirect } from "react-router-dom";
import SignUpForm from "../component/Form/SignupForm";
function Signup(props) {
  return (
    <>
      <SignUpForm></SignUpForm>
    </>
    // <section className={styles.signup}>
    //   <div className={styles.image}>
    //     <img alt="login-signup" src={authImage}></img>
    //   </div>
    //   <div className={styles.content}>
    //     <div className={styles.body}>
    //       <Tab
    //         tab_list={tab_list}
    //         weight="800"
    //         size="24px"
    //         flexDirection="row"
    //         height="30px"
    //       ></Tab>
    //       <SignUpForm></SignUpForm>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Signup;
export const action = async ({ request }) => {
  const data = await request.formData();
  const authUser = {
    first_name: data.get("first_name"),
    last_name: data.get("last_name"),
    email: data.get("email"),
    username: data.get("username"),
    password: data.get("password"),
    password2: data.get("password2"),
  };

  const response = await fetch("http://127.0.0.1:8000/auth/register", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(authUser),
  });
  if (response.status === 400) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not authenticate user" }, { status: 500 });
  }

  return redirect("/auth/login");
};
