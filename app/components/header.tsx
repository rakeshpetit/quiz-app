import { NavLink } from "@remix-run/react";

export default function Header() {
  const activeStyle = "bg-gray-500 font-bold text-gray-700";
  return (
    <nav className="navbar navbar-expand-lg relative flex w-full items-center justify-between bg-gray-50 py-2 shadow-md">
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <div className="flex items-center">
          <button
            className="navbar-toggler mr-2 border-0 bg-transparent py-3 text-xl leading-none text-gray-600 transition-shadow duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 lg:hidden"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <a className="navbar-brand text-red-600" href="#!">
            <svg
              className="ml-2 mr-2 h-5 w-5 lg:ml-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"
              ></path>
            </svg>
          </a>
        </div>
        <div
          className="collapse navbar-collapse grow items-center"
          id="navbarSupportedContentY"
        >
          <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                <span
                  className="nav-link block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 lg:px-2"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Home
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/uses"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                <span
                  className="nav-link block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 lg:px-2"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Uses
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
