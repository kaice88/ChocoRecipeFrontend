import authImage from "../assets/cake.jpg";
import Tab from "../component/UI/Tab";
import LoginForm from "../component/Form/LoginForm";
import styles from "./Login.module.css";
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
          <Tab tab_list={tab_list} weight="800" size="24px"></Tab>
          <LoginForm></LoginForm>
        </div>
      </div>
    </section>
  );
}

export default Login;
