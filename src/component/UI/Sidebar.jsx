import { Layout, Avatar, Menu } from "antd";
import { useRouteLoaderData, Form, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Sidebar.module.css";
import { userAction } from "../../store/user-slice";
import { useState } from "react";
const { Sider } = Layout;
const stylesSidebar = {
  backgroundColor: "white",
  boxShadow: "0 0 2em rgba(0,0,0,0.12)",
};

const items = [
  { key: "1", label: "Just for you" },
  { key: "2", label: "My recipes" },
  { key: "3", label: "Favorite recipes" },
  { key: "4", label: "Change password" },
];

function Sidebar() {
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
        <div className={styles.avatar}>
          <Avatar size={50} src={user.image}></Avatar>
        </div>
        <div className={styles.username}>
          <Link>{user.username}</Link>
        </div>
      </div>

      <Menu
        style={{
          width: "100%",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items}
      />
      {data && (
        <Form action="/auth/logout" method="post">
          <button>Logout</button>
        </Form>
      )}
    </Sider>
  );
}

export default Sidebar;
