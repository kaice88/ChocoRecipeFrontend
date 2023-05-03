import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login, { action as LoginAction } from "./page/Login";
import Signup, { action as SigupAction } from "./page/Signup";
import Home from "./page/Home";
import Root, { loader as userLoader } from "./page/Root";
import ErrorPage from "./page/Error";
import Profile from "./page/Profile";
import { action as LogoutAction } from "./page/Logout";
import MyRecipes from "./page/MyRecipes";
import FavouriteRecipes from "./page/FavouriteRecipes";
import Authenticate from "./page/Authenticate";
import RecipeDetail from "./page/RecipeDetail";
import ChangePassword, {
  action as ChangePasswordAction,
} from "./page/ChangePassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    id: "root",
    loader: userLoader,
    children: [
      { index: true, element: <Home /> },
      {
        path: "profile",
        element: <Profile></Profile>,
        children: [
          // { index: true, element: <Profile></Profile> },
          {
            path: "my-recipes",
            element: <MyRecipes></MyRecipes>,
          },
          {
            path: "fav-recipes",
            element: <FavouriteRecipes></FavouriteRecipes>,
          },
          {
            path: "change-pwd",
            element: <ChangePassword></ChangePassword>,
            action: ChangePasswordAction,
          },
        ],
      },
      {
        path: ":recipeId",
        element: <RecipeDetail></RecipeDetail>,
      },
    ],
  },
  {
    path: "auth",
    element: <Authenticate></Authenticate>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
        action: LoginAction,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
        action: SigupAction,
      },
      {
        path: "logout",
        action: LogoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
