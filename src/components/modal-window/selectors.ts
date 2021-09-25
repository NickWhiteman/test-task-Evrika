import { IDashboardState } from "../../dashboard/types";

export const selectIsOpenModal = (state: IDashboardState) => 
  state.isOpenModal;

export const selectDeleteId = (state: IDashboardState) => state.userId