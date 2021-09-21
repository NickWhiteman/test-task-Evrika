import { IUser } from "../../dashboard/types";

export interface IButtonProps {
  mode: string
  children: string | HTMLElement | JSX.Element
  icon?: JSX.Element
  onChange: (model: IUser) => void
};