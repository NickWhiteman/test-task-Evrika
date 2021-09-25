import { IDashboardState, IUser } from "./types";

export const selectorGetUsers = (state: IDashboardState): IUser[] =>
  state.users;

export const selectorGetMode = (state: IDashboardState): string =>
  state.mode;