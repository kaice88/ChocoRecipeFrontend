import { Layout, Avatar, Menu } from "antd";
import { useRouteLoaderData, Form, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Sidebar.module.css";
import { userAction } from "../../store/user-slice";
import Button from "./Button";
// import image from "../../assets/avatar.jpg"

const { Sider } = Layout;
const stylesSidebar = {
  backgroundColor: "white",
  boxShadow: "0 0 2em rgba(0,0,0,0.12)",
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
};

const items = [
  { key: "1", label: "Just for you", route: "home" },
  { key: "2", label: "My recipes", route: "profile" },
  { key: "3", label: "Favorite recipes", route: "profile" },
  { key: "4", label: "Change password", route: "profile" },
];

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useRouteLoaderData("root");
  const user = useSelector((state) => state.user);
  if (!data) {
    dispatch(userAction.resetUser());
  }
  return (
    <Sider style={stylesSidebar} width={200} className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img alt="" src="https://x.yummlystatic.com/web/yummly.svg"></img>
          </Link>
        </div>
        {data ? (
          <>
            <Link to="profile/my-recipes" className={styles.avatar}>
              <Avatar size={50} src={user.image}></Avatar>
            </Link>
            <div className={styles.username}>
              <Link>{user.username}</Link>
            </div>
          </>
        ) : (
          <Link to="/auth/login">
            <Button styles="save" value="Sign Up / Log In" />
          </Link>
        )}
      </div>

      <Menu
        style={{
          width: "100%",
        }}
        defaultSelectedKeys={["3"]}
        defaultOpenKeys={["sub1"]}
        items={items}
        onClick={() => {
          navigate(`/profile`);
        }}
      />
      {data && (
        <div className={styles.logout}>
          <Form action="/auth/logout" method="post">
            <Button type="submit" value="Log out"></Button>
          </Form>
        </div>
      )}
    </Sider>
  );
}

export default Sidebar;
