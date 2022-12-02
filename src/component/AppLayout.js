import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const AppLayout = () => (
  <>
    <Navbar />
    {/* <SideBar /> */}
    {/* // main  html  hai  */}
    <main>
      <Outlet />{" "}
      {/*  <-- nested routes rendered here
       */}
    </main>
  </>
);


export default AppLayout;
