import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./pages/Wrapper";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
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
    <div className="min-h-screen min-w-full bg-bgPrimary text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
