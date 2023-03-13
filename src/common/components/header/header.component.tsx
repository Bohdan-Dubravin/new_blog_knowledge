import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) => {
    return clsx("text-black/30 py-2 ", {
      "text-black/80 drop-shadow-md shadow-black": isActive,
    });
  };
  return (
    <header>
      <nav className="px-2 py-4 ">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <Link
            className="font-titillilum text-2xl mr-8 text-theme-green"
            to="/"
          >
            Conduit
          </Link>
          <ul className="flex gap-2">
            <li className="">
              <NavLink className={navLinkClass} to="/">
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink className={navLinkClass} to="/signin">
                Sign In
              </NavLink>
            </li>
            <li className="">
              <NavLink className={navLinkClass} to="/signup">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
