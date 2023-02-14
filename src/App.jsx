import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Wrapper from "./layout/Wrapper";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Protected from "./layout/Protected";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: (
      <Wrapper>
        <Home />
      </Wrapper>
    ),
  },
  {
    path: "/search",
    element: (
      <Protected>
        <Wrapper>
          <Search />
        </Wrapper>
      </Protected>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <Protected>
        <Wrapper>
          <Detail />
        </Wrapper>
      </Protected>
    ),
  },
]);

function App() {
  return (
    <div className="min-h-screen min-w-full bg-bgPrimary text-white duration-75">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
