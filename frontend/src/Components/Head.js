import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Head = () => {
  const path = useLocation();
  return (
    <>
      <header>
        <nav className="flex items-center flex-wrap sm:flex-nowrap  gap-3   sm:justify-around sm:gap-3  p-3">
          <Link
            to="/"
            className={`flex justify-center  sm:w-1/6 px-2 ${
              path.pathname === "/" ? "bg-pink-800" : "bg-gray-300"
            }  sm:text-sm text-white items-center gap-2 border rounded py-1`}
            style={{pointerEvents:"none"}}
      
          >
            <i className="bi bi-person-fill-check"></i>

            <span className="">General</span>
          </Link>

          <hr className=" hidden sm:block sm:w-1/3 border-[1px]  border-solid border-gray-400 " />

          <Link
            to="/pricing"
            className={`flex   justify-center sm:w-1/6 px-2 ${
              path.pathname === "/pricing" ? "bg-pink-800" : "bg-gray-300"
            }  sm:text-sm text-white items-center gap-2 border rounded py-1`}
            style={{pointerEvents:"none"}}
          >
            <i className="bi bi-tag-fill"></i>
            <span>Pricings</span>
          </Link>

          <hr className="border-[1px] hidden sm:block sm:w-1/3 border-solid border-gray-400 " />

          <Link
            to="/targettings"
            className={`flex  justify-center sm:w-1/6 px-2 ${
              path.pathname === "/targettings" ? "bg-pink-800" : "bg-gray-300"
            }  sm:text-sm text-white items-center gap-2 border rounded py-1`}
            style={{pointerEvents:"none"}}
          >
            <i className="bi bi-crosshair"></i>
            <span>Targetings</span>
          </Link>

          <hr className="border-[1px] hidden sm:block sm:w-1/3 border-solid border-gray-400 " />

          <Link
            to="settings"
            className={`flex   justify-center sm:w-1/6 px-2 ${
              path.pathname === "/settings" ? "bg-pink-800" : "bg-gray-300"
            }  sm:text-sm text-white items-center gap-2 border rounded py-1`}
            style={{pointerEvents:"none"}}
          >
            <i className="bi bi-gear"></i>
            <h1>AdvancedSetting</h1>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Head;
