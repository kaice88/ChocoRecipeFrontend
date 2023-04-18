import { Outlet, json, redirect, useRouteLoaderData } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "../component/UI/Sidebar";
import { getAuthToken } from "../utils/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userAction } from "../store/user-slice";
const { Content } = Layout;

function Root() {
  const data = useRouteLoaderData("root");

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const { user } = data;
      dispatch(userAction.updateUser(user));
    }
  }, [data, dispatch]);
  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <Layout>
          <Content style={{ height: "100vh", backgroundColor: "white" }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Root;
export const loader = async () => {
  // const response = await fetch("");
  // if (!response.ok) {
  //   throw json({ message: "Could not fetch user" }, { status: 500 });
  // } else {
  //   const data = await response.json();
  //   const user = data.user;
  //   const token = getAuthToken();
  //   return { user, token };
  // }
  const token = getAuthToken();
  if (token) {
    const user = {
      user_id: null,
      username: "kimchi",
      email: "chinguyen2k1@gmail.com",
      password: "",
      image:
        "https://i.pinimg.com/564x/ae/b5/49/aeb549a5892e4d62e343380285c18619.jpg",
    };
    return { user, token };
  } else {
    return null;
  }
};
