// import ButtonAuth from "../component/UI/ButtonAuth";
// import Input from "../component/UI/Input";
import authImage from "../assets/cake.jpg";
import Tab from "../component/UI/Tab";
import SignUpForm from "../component/Form/SignupForm";
import styles from "./Login.module.css";
function Signup(props) {
  const tab_list = [
    { value: "Log in", isActive: false, route: "login" },
    { value: "Sign up", isActive: true, route: "signup" },
  ];

  return (
    <section>
      <div className={styles.image}>
        <img alt="login-signup" src={authImage}></img>
      </div>
      <div className={styles.content}>
        <div className={styles.body}>
          <Tab tab_list={tab_list} weight="800" size="24px"></Tab>
          <SignUpForm></SignUpForm>
        </div>
      </div>
    </section>
  );
}

export default Signup;
