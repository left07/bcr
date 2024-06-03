import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search";
import Car from "./pages/car";

import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/car",
        element: <Search />,
      },
      {
        path: "/car/:id",
        element: <Car />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
