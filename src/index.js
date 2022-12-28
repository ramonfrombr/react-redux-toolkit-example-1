import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { fetchUsers } from "./features/users/usersSlice";
import { fetchPosts } from "./features/posts/postsSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotificationContext, notificationValue } from "./NotificationContext";

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <NotificationContext.Provider value={notificationValue}>
      <ReduxProvider store={store}>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </ReduxProvider>
    </NotificationContext.Provider>
  </React.StrictMode>
);
