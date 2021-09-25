export interface IModalProps {
  mode: string
  userId?: number
};

type ModalEditProps = {
  fields: string[]
}

export interface IFormEditProps {
  userId: number
};

export type FormProps = ModalEditProps;

export type FormUser = {
  firstName: string;
  lastName: string;
  fatherName: string;
  email: string;
  login: string;
}
