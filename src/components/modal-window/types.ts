export interface IModalProps {
  mode: string
  fields: string[]
  userId?: number
};

type ModalEditProps = Pick<IModalProps, 'fields'>;

export interface IFormEditProps extends ModalEditProps {
  userId: number
};

export type FormProps = ModalEditProps;

export interface IOptions extends ModalEditProps {
  userId: number
};

export type IFormOptions = {
  options: IOptions
};

export type DeleteConfirmProps = {
  userId: number
};
