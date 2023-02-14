import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
      <Wrapper>
        <Search />
      </Wrapper>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <Wrapper>
        <Detail />
      </Wrapper>
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
