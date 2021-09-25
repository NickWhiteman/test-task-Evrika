import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORE_NAME } from './const';
import { IDashboardState, IUser } from './types';

const initialState: IDashboardState = {
  users: [],
  isOpenModal: false,
  data: [],
  mode: 'createUser',
  userId: 0
};

export const DashboardStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    getUsers(state, { payload }: PayloadAction<IUser[]>) {
      state.users = payload;
    },
    setUsers(state, { payload }: PayloadAction<IUser[]>) {
      state.users = payload;
    },
    editUserId(state, { payload }: PayloadAction<number>) {
      state.userId = payload;
    },
    toggleModal(state) {
      state.isOpenModal = !state.isOpenModal;
    },
    takeData(state, { payload }:PayloadAction<IUser[]>) {
      state.data = payload;
    },
    setMode(state, { payload }: PayloadAction<string>) {
      state.mode = payload;
    },
    deleteUserId(state, { payload }: PayloadAction<number>) {
      state.userId = payload;
    }
  },
});

export const DashboardActions = {
  ...DashboardStore.actions,
};

export const DashboardReducer = DashboardStore.reducer;
