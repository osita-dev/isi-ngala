import { create } from "zustand";
import { users } from "@/data/mockData";
import type { User } from "@/data/mockData";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  signupStep: number;
  signupData: Partial<{ email: string; password: string; displayName: string; username: string; hairType: string; interests: string[] }>;
  login: (email: string, password: string) => void;
  signup: () => void;
  logout: () => void;
  setSignupStep: (step: number) => void;
  updateSignupData: (data: Partial<AuthState["signupData"]>) => void;
  resetSignup: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  signupStep: 0,
  signupData: {},
  login: () => {
    set({ user: users[0], isAuthenticated: true });
  },
  signup: () => {
    set({ user: users[0], isAuthenticated: true, signupStep: 0, signupData: {} });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  setSignupStep: (step) => set({ signupStep: step }),
  updateSignupData: (data) =>
    set((state) => ({ signupData: { ...state.signupData, ...data } })),
  resetSignup: () => set({ signupStep: 0, signupData: {} }),
}));
