let logoutTimer: NodeJS.Timeout | null = null;

export const startLogoutTimer = (): void => {
  // Set the idle timeout duration (1 hour in this example)
  const idleTimeoutDuration = 60 * 60 * 1000; // 1 hour in milliseconds

  // Clear the existing timer, if any
  if (logoutTimer) {
    clearTimeout(logoutTimer);
  }

  // Start a new timer
  logoutTimer = setTimeout(() => {
    // Trigger the logout action or perform the logout logic here
    // Call your logoutUser thunk or perform the necessary logout logic
    // Example: store.dispatch(logoutUser());
  }, idleTimeoutDuration);
};

export const resetLogoutTimer = (): void => {
  startLogoutTimer();
};
