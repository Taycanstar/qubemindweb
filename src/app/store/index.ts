// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/index"; // Import the user slice reducer here.
import { userActivityTracker } from "./user/middleware"; // Import the middleware

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userActivityTracker), // Add the middleware to the chain
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
