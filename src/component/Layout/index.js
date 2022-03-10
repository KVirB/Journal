import { Outlet } from "react-router-dom";

import MainHeader from "../header/MainHeader";

function Layout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default Layout;
