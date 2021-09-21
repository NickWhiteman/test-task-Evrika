import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORE_NAME } from './const';
import { IDashboardState, IUser } from './types';

const initialState: IDashboardState = {
  users: [],
  isOpenModal: false,
  data: [],
};

export const DashboardStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    getUsers(state, { payload }: PayloadAction<IUser[]>) {
      state.users = payload;
    },
    createUser(state, { payload }: PayloadAction<IUser[]>) {
      state.users = payload;
    },
    updateUser(state, { payload }: PayloadAction<IUser[]>) {
      state.users = payload;
    },
    deleteUser(state, { payload }: PayloadAction<IUser[]>) {
      state.users = payload;
    },
    toggleModal(state) {
      state.isOpenModal = !state.isOpenModal;
    },
    takeData(state, { payload }:PayloadAction<IUser[]>) {
      state.data = payload;
    },
  },
});

export const DashboardActions = {
  ...DashboardStore.actions,
};

export const DashboardReducer = DashboardStore.reducer;
