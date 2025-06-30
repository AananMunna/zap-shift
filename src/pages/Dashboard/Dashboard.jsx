import React from "react";
import { Link, Outlet } from "react-router";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { FiHome, FiBox, FiDollarSign, FiSettings } from "react-icons/fi";


const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ✅ Main Content */}
      <div className="drawer-content flex flex-col min-h-screen bg-base-100">
        {/* 🌐 Mobile Topbar */}
        <div className="lg:hidden flex justify-between items-center px-4 py-3 border-b bg-base-100 shadow-sm">
          {/* Logo */}
                  <Link to="/">
                    <div className="flex items-center gap-2">
                      <img src={logo} alt="Profast" className="w-6 h-6" />
                      <span className="text-xl font-bold text-gray-900 tracking-tight">Profast</span>
                    </div>
                  </Link>

          {/* Right: Hamburger */}
          <label htmlFor="dashboard-drawer" className="btn btn-ghost">
            <FiMenu className="text-2xl" />
          </label>
        </div>

        {/* 🧠 Main Page Outlet */}
        <main className="flex-1 w-full mx-auto px-3">
          <div className="bg-white dark:bg-base-200 h-full shadow-sm p-6">
            <Outlet />
          </div>
        </main>
      </div>

      {/* ✅ Left Sidebar */}
      <div className="drawer-side z-50">
      <label htmlFor="dashboard-drawer" className="drawer-overlay lg:hidden"></label>

      <aside className="w- bg-base-200 text-base-content min-h-screen fixed lg:relative top-0 left-0 shadow-md flex flex-col">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-base-300">
          <NavLink to="/">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Profast" className="w-6 h-6" />
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Profast
              </span>
            </div>
          </NavLink>
        </div>

        {/* Menu */}
        <ul className="menu p-4 gap-y-1 text-sm font-medium">
          {/* <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`
              }
            >
              <FiHome /> Dashboard
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/dashboard/myParcel"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`
              }
            >
              <FiBox /> My Parcel
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myPayments"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`
              }
            >
              <FiDollarSign /> My Payments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`
              }
            >
              <FiSettings /> Settings
            </NavLink>
          </li>
        </ul>

        {/* Footer */}
        <div className="mt-auto px-4 py-3 text-xs text-gray-500 border-t">
          &copy; {new Date().getFullYear()} Profast
        </div>
      </aside>
    </div>
    </div>
  );
};

export default DashboardLayout;
