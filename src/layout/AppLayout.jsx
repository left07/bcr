import { Outlet } from "react-router-dom";
import Header from "../features/Header";
import Footer from "../features/Footer";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default AppLayout;
