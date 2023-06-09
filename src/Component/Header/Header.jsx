import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  console.log(cart.length);

  const signOut = () => {
    logOut()
      .then(() => {
        refreshPage();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          aria-label="Our MenuPage"
          title="Our MenuPage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
          OUR MENU
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/shop"
          aria-label="Our ShopPage"
          title="Our ShopPage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
          OUR SHOP
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          aria-label="Our ContactPage"
          title="Our ContactPage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
          CONTACT US
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30   text-white bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
          >
            {navItem}
            <li> 
              <Link
                  to="/login"
                  className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md   bg-fuchsia-900  hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  aria-label="login"
                  title="login"
                >
                  login
                </Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end gap-4">
        <Link to="/dashboard/my-cart">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator text-2xl">
             <FaShoppingCart></FaShoppingCart>
              
              <span className="badge badge-sm indicator-item">+{cart?.length || 0}</span>
            </div>
          </label>
        
        </div>
        
        </Link>
        {user?.uid ? (
          <>
            <div className="dropdown dropdown-hover dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle border-2 border-primary avatar ml-2"
              >
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img alt="" src={user.photoURL} />
                  ) : (
                    <img
                      alt=""
                      src="https://i.ibb.co/VvZScTP/blank-avatar.png"
                    />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content p-2 shadow  border rounded-md w-52"
              >
                <li>
                  <Link>{user?.displayName}</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link>Profile</Link>
                </li>
                <li>
                  <Link onClick={signOut}>Logout</Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <ul className="col-span-3 justify-end items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/login"
                  className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-[#D99904]"
                  aria-label="login"
                  title="login"
                >
                  login
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
