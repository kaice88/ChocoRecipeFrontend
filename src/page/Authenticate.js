import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Tab from "../component/UI/Tab";
import authImage from "../assets/cake.jpg";
import LoginForm from "../component/Form/LoginForm";
import styles from "./Authenticate.module.css";
const { Sider, Content, Header } = Layout;
const tab_list = [
  { value: "Log in", isActive: true, route: "/auth/login" },
  { value: "Sign up", isActive: false, route: "/auth/signup" },
];

function Authenticate() {
  return (
    <>
      <Layout>
        <Sider theme="light" width={800}>
          <div>
            <img
              className={styles.image}
              alt="login-signup"
              src={authImage}
            ></img>
          </div>
        </Sider>
        <Layout style={{ backgroundColor: "white" }}>
          <div className={styles.content}>
            <div className={styles.body}>
              <Header>
                <Tab
                  className={styles.tab}
                  tab_list={tab_list}
                  weight="800"
                  size="24px"
                  flexDirection="row"
                  height="50px"
                ></Tab>
              </Header>
              <Content>
                <Outlet></Outlet>
              </Content>
            </div>
          </div>
        </Layout>
      </Layout>
    </>
  );
}

export default Authenticate;
