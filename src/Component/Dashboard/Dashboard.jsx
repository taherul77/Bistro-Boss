import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart ,FaWallet ,FaCalendar, FaHome ,FaStar, FaBookmark,FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { AiOutlineMenu,AiOutlineHome,AiOutlineContacts } from "react-icons/ai";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";



const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col mx-auto items-center justify-center">
    <label htmlFor="my-drawer-2" className="btn bg-[#D1A054] drawer-button lg:hidden">Open drawer</label>
      <Outlet></Outlet>
      
    
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 text-center text-xl h-full bg-[#D1A054] text-base-content">
        {/* Sidebar content here */}

        <h2 className="text-4xl py-6">Bistro Boss</h2>

        {
          isAdmin?<>
            <li><NavLink
          to="/dashboard/home"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaHome></FaHome> ADMIN HOME
        </NavLink></li>
        <li><NavLink
          to="/dashboard/reservation"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaUtensils></FaUtensils> ADD ITEMS
        </NavLink></li>
        <li><NavLink
          to="/dashboard/payment"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaWallet></FaWallet> MANAGE ITEMS
        </NavLink></li>
        <li><NavLink
          to="/dashboard/"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaBook></FaBook> MANAGE BOOKINGS
        </NavLink></li>
        <li><NavLink
          to="/dashboard/all-users"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaUsers></FaUsers>  ALL USERS
        </NavLink></li>
        
          
          
          </>:<>
            <li><NavLink
          to="/dashboard/home"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaHome></FaHome> USER HOME
        </NavLink></li>
        <li><NavLink
          to="/dashboard/reservation"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaCalendar></FaCalendar>RESERVATION
        </NavLink></li>
        <li><NavLink
          to="/dashboard/payment"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaWallet></FaWallet>PAYMENT HISTORY
        </NavLink></li>
        <li><NavLink
          to="/dashboard/my-cart"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaShoppingCart></FaShoppingCart> MY CART <span>+{cart?.length}</span>
        </NavLink></li>
        <li><NavLink
          to="/dashboard/reviews"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaStar></FaStar>REVIEWS
        </NavLink></li>
        <li><NavLink
          to="/dashboard/my-booking"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaBookmark></FaBookmark>MY BOOKING
        </NavLink></li>
          </>
        }
      
        <div className="divider"></div>
        <li><NavLink
          to="/"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <AiOutlineHome></AiOutlineHome> HOME
        </NavLink></li>
        <li><NavLink
          to="/menu"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <AiOutlineMenu></AiOutlineMenu> MENU
        </NavLink></li>
        <li><NavLink
          to="/shop"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <FaShoppingCart></FaShoppingCart> SHOP
        </NavLink></li>
       
      
        <li><NavLink
          to="/contact"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
         <AiOutlineContacts></AiOutlineContacts> CONTACT
        </NavLink></li>
       
        
      </ul>
    
    </div>
  </div>
  );
};

export default Dashboard;
