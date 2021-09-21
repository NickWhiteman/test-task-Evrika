import { IUser } from "../../dashboard/types";

export interface ITableProps {
  children: IUser[]
  headers: string[]
}