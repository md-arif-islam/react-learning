import React from "react";
import avater from "../../assets/img/avatar.png";
import "./Topbar.css";
import "tw-elements";
import { useAuth } from "../../contexts/AuthConntext";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return currentUser ? (
    <>
      <div className="fixed w-auto top-0 h-[100px] flex items-center justify-between left-[300px] right-0 z-10 shadow-md  bg-white">
        <div className="float-left flex flex-row items-center pl-4">
          <span className="text-2xl font-bold">DashBoard</span>
        </div>

        <div className="float-right p-8 flex flex-row items-center border-">
          <div className="flex justify-center">
            <div>
              <div className="dropdown relative">
                <a
                  className="dropdown-toggle px-5 py-3 bg-transparent text-blue-600 font-semibold text-md leading-tight rounded hover:text-orange-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                  href="#"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={avater} alt="avatar" className="w-7 h-7 mr-2" />
                  {currentUser.displayName}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </svg>
                </a>
                <ul
                  className="dropdown-menu min-w-max w-full absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-blue-600 border-[1px]"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:text-blue-600"
                      href="#"
                    >
                      Dashboard
                    </a>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:text-blue-600"
                      onClick={logout}
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>{navigate("/login")}</>
  );
};

export default Topbar;
