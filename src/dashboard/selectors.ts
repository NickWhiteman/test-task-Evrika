import { IDashboardState, IUser } from "./types";

export const selectorGetUsers = (state: IDashboardState): IUser[] =>
  state.users;
