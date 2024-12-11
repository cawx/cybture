import { create } from "zustand";

type UserInputState = {
  inputs: { [key: string]: string };
  setInput: (key: string, value: string) => void;
};

export const useUserInputStore = create<UserInputState>((set) => ({
  inputs: {},
  setInput: (key, value) =>
    set((state) => ({
      inputs: { ...state.inputs, [key]: value },
    })),
}));
