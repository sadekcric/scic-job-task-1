import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[700px] mx-auto bg-[#E2126D] text-white">
      <Outlet />
    </div>
  );
};

export default Layout;
