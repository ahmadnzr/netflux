import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./pages/Wrapper";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
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
      <div className="max-w-[1512px] mx-auto px-[81px] pt-[18px] pb-[50px]">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
