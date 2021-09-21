import { IUser } from "../../dashboard/types";

export interface ITableProps {
  children: IUser[]
  headers: string[]
  deleteUserHandler: () => void
  editionUserHandler: (user: IUser) => void
}