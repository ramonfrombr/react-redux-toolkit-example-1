import { createContext } from "react";

export const notificationValue = {
  notifications: [
    ["warning", "This is a warning notification!"],
    ["success", "This is a success notification"],
  ],
  toggleNotification: () => {},
};

export const NotificationContext = createContext(notificationValue);
