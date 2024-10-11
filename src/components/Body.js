import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";

const Body = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Login />, errorElement: <Error /> },
    { path: "/browse", element: <Browse />, errorElement: <Error /> },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Body;
