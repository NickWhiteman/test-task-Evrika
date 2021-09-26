export interface IUser {
  id: number
  firstName: string
  lastName: string
  fatherName: string
  email: string
  login: string
};

export interface IDashboardState {
  users: IUser[]
  isOpenModal: boolean
  data: IUser[]
  mode: string
  userId: number
  isDelete: boolean
};
