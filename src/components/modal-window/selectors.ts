import { IDashboardState } from "../../dashboard/types";

export const selectIsOpenModal = (state: IDashboardState) => 
  state.isOpenModal;