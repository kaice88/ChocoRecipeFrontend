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
      <Layout hasSider>
        <Sidebar></Sidebar>
        <Layout
          style={{
            marginLeft: 200,
          }}
        >
          <Content
            style={{
              overflow: "initial",
              backgroundColor: "white",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Root;
export const loader = async () => {
  const id = localStorage.getItem("id");
  const token = getAuthToken();
  let response;
  if (token && id) {
    response = await fetch("http://127.0.0.1:8000/user/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) {
      throw json({ message: "Could not fetch user" }, { status: 500 });
    }
    const user = await response.json();
    return { user, token };
  } else {
    return null;
  }
  // if (token) {
  //   const user = {
  //     user_id: null,
  //     username: "kimchi",
  //     email: "chinguyen2k1@gmail.com",
  //     password: "",
  //     image:
  //       "https://i.pinimg.com/564x/ae/b5/49/aeb549a5892e4d62e343380285c18619.jpg",
  //   };
  //   return { user, token };
  // } else {
  //   return null;
  // }
};
