import { create } from "zustand";
import { users } from "@/data/mockData";
import type { User } from "@/data/mockData";

interface SignupData {
  email: string;
  password: string;
  displayName: string;
  username: string;
  hairType: string;
  interests: string[];
  country: string;
  province: string;
  isMinor: boolean;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isMinor: boolean;
  signupStep: number;
  signupData: Partial<SignupData>;
  login: (email: string, password: string) => void;
  signup: () => void;
  logout: () => void;
  setSignupStep: (step: number) => void;
  updateSignupData: (data: Partial<SignupData>) => void;
  resetSignup: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isMinor: false,
  signupStep: 0,
  signupData: {},
  login: () => {
    set({ user: users[0], isAuthenticated: true, isMinor: false });
  },
  signup: () => {
    set((state) => {
      const minor = state.signupData.isMinor ?? false;
      console.log("SIGNUP - signupData:", JSON.stringify(state.signupData), "isMinor:", minor);
      return {
        user: users[0],
        isAuthenticated: true,
        isMinor: minor,
        signupStep: 0,
        signupData: {},
      };
    });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false, isMinor: false });
  },
  setSignupStep: (step) => set({ signupStep: step }),
  updateSignupData: (data) =>
    set((state) => ({ signupData: { ...state.signupData, ...data } })),
  resetSignup: () => set({ signupStep: 0, signupData: {} }),
}));
