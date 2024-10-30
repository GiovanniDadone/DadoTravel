import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <div className='fixed w-full z-10'>
        <Navbar />
      </div>
      <div className='bg-hero bg-cover fixed inset-0 text-white '>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-900/90 via-transparent -z-10 to-transparent'></div>
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
