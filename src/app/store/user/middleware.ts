import { Middleware } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "./index";
import { resetLogoutTimer } from "../idleTimer"; // Import the resetLogoutTimer function

let logoutTimer: NodeJS.Timeout | null = null;

const startLogoutTimer = (store: any) => {
  // Set a timeout for 1 hour
  const idleTimeoutDuration = 60 * 60 * 1000; // 1 hour in milliseconds

  // Clear the existing timer, if any
  if (logoutTimer) {
    clearTimeout(logoutTimer);
  }

  // Start a new timer
  logoutTimer = setTimeout(() => {
    store.dispatch(logoutUser());
  }, idleTimeoutDuration);
};

export const userActivityTracker: Middleware =
  (store) => (next) => (action) => {
    // Reset the logout timer for any dispatched action
    resetLogoutTimer();

    // If the action is loginUser.fulfilled, start the logout timer
    if (action.type === loginUser.fulfilled.type) {
      startLogoutTimer(store);
    }

    return next(action);
  };
