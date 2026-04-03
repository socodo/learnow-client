import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  isLoggedIn: boolean;
  user: { name: string; email: string; avatar?: string } | null;
  setLogin: (userData: {
    name: string;
    email: string;
    avatar?: string;
  }) => void;
  setLogout: () => void;
}
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      setLogin: (userData) => set({ isLoggedIn: true, user: userData }),
      setLogout: () => set({ isLoggedIn: false, user: null }),
    }),
    {
      name: "isAuthenticated",
    },
  ),
);
