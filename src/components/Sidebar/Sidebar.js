import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 w-[300px] bg-gradient-to-b from-blue-600 to-blue-900 px-10 py-5">
      <ul className="list-none">
        <h3 className="text-3xl font-semibold text-white mb-8">
          <i className="fas fa-laugh-wink"></i> React JS
        </h3>
        <li className="p-1">
          <a
            href="/tailwindcolumn"
            className="font-semibold text-white hover:text-orange-400 text-lg"
          >
            <i className="fas fa-tachometer-alt"></i>Tailwind Column
          </a>
        </li>
        <li className="p-1">
          <a
            href="/localstorage"
            className="font-semibold text-white hover:text-orange-400 text-lg"
          >
            <i className="fas fa-tachometer-alt"></i>Local Storage
          </a>
        </li>
      </ul>
      <footer className="absolute bottom-5 left-0 right-0 text-center ">
        <h5 className="text-white text-xl font-semibold">MD Arif Islam</h5>
        <p className="text-gray-100 text-sm">
          ©2022 React JS All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
