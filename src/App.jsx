import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";


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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
