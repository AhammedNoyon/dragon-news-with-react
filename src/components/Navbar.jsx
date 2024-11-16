import { Link, NavLink } from "react-router-dom";
import userLogo from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Navbar = () => {
  //context
  const { user, signOutUser } = useContext(AuthContext);
  //log out
  const handleLogout = () => {
    signOutUser()
      .then(() => {
        console.log("sign out successfully");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  //nav link
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-0 pt-8">
      <div className="navbar-start">
        <div>{user?.email}</div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end gap-2">
        <div>
          <img src={userLogo} alt="user" />
        </div>
        <div>
          {user ? (
            <Link
              onClick={handleLogout}
              to="/auth/login"
              className="bg-[#403F3F] text-white py-2 px-6"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/auth/login"
              className="bg-[#403F3F] text-white py-2 px-6"
            >
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
