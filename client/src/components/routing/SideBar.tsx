import React from "react";
import { BiLogOut } from "react-icons/bi";
import { BsLayoutSidebar, BsLayoutSidebarInset } from "react-icons/bs";
import { sideBarLinks } from "./routes";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const [active, setActive] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
        setOpen(false);
      }
    });
  }, []);

  const handleLogout = () => {
    // 
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={` sm:hidden ${
          open
            ? "text-white hover:bg-slate-950 top-6"
            : "hover:bg-slate-200 top-5 "
        } absolute z-[51] left-2 p-1 rounded-md border  duration-300`}
      >
        {open ? <BsLayoutSidebarInset /> : <BsLayoutSidebar />}
      </button>
      {/* overlAY */}
      {open && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-black/50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <aside
        // className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl"
        className={`sm:relative z-50 bg-white absolute duration-500 top-0 h-screen w-64 sm:block shadow-xl ${
          open ? "left-0" : " -left-[1000px] sm:left-0 sm:block"
        }`}
      >
        <div className="p-6 flex flex-col my-5">
          <img src="/vite.svg" alt="logo" className="w-14 mx-auto" />
          <Link
            to={"/portal"}
            className="text-blue-800 text-xl font-luckGuy text-center mx-auto w-full justify-center flex font-semibold uppercase hover:text-blue-900"
          >
            HTPP
          </Link>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          {sideBarLinks.map((link) => {
            const isDash =
              link.link === "/portal" ||
              link.link === "/portal/" ||
              link.link === "/";
            const isActive = isDash
              ? active === link.link
              : active.startsWith(link.link);
            return (
              <Link
                key={link.name}
                to={link.link}
                className={`flex duration-500 border-l-4 border-transparent  hover:bg-blue-700 items-center text-blue-800 hover:text-white  py-4 pl-6 nav-item 
            ${isActive ? "bg-blue-700 text-white  border-blue-700 " : "hover:bg-blue-500"}
            `}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={handleLogout}
          className="absolute w-full upgrade-btn bottom-0  text-white flex items-center justify-start hover:bg-black py-4 pl-6"
        >
          <BiLogOut className="mr-3" />
          Logout
        </button>
      </aside>
    </>
  );
};

export default SideBar;
