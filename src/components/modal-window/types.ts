import { Dispatch } from "@reduxjs/toolkit";
import { IUser } from "../../dashboard/types";

export interface IModalProps {
  mode: string
  fields: string[]
  keyUser?: string[]
  userId?: number
  isOpen: boolean
  onSubmit: (model: IUser, dispatch: Dispatch) => void
  onClose: (dispatch: Dispatch) => void
};


type ModalEditProps = Pick<IModalProps, 'fields' | 'isOpen'>

export interface IFormEditProps extends ModalEditProps {
  keyUser: string[];
  userId: number;
}

