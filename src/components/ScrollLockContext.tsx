import React, { createContext, useContext, useState } from "react";

type ScrollLockContextType = {
  isLocked: boolean;
  lockScroll: () => void;
  unlockScroll: () => void;
};

const ScrollLockContext = createContext<ScrollLockContextType>({
  isLocked: false,
  lockScroll: () => {},
  unlockScroll: () => {},
});

export const useScrollLock = (): ScrollLockContextType =>
  useContext(ScrollLockContext);

export const ScrollLockProvider: React.FC = ({ children }) => {
  const [isLocked, setLocked] = useState(false);

  const lockScroll = () => {
    setLocked(true);
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    setLocked(false);
    document.body.style.overflow = "auto";
  };

  return (
    <ScrollLockContext.Provider value={{ isLocked, lockScroll, unlockScroll }}>
      {children}
    </ScrollLockContext.Provider>
  );
};
