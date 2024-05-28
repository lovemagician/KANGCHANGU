import "./index.css";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
}

export default Layout;
