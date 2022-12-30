import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
import { NotificationContext } from "../NotificationContext";

const Layout = () => {
  const notificationsContext = useContext(NotificationContext);

  return (
    <>
      <Header />
      <button onClick={() => notificationsContext.toggleNotification()}>
        Toggle Context
      </button>
      <main className="p-5 bg-gray-800 min-h-screen">
        <div className="sm:w-2/3 m-auto">
          {notificationsContext.notifications.map((notification, idx) => (
            <p
              key={idx}
              className={`${
                notification[0] === "warning"
                  ? "bg-red-500"
                  : notification[1] === "success"
                  ? "bg-green-500"
                  : "bg-gray-500"
              } text-white p-2 rounded font-bold mb-1`}
            >
              {notification[1]}
            </p>
          ))}
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
