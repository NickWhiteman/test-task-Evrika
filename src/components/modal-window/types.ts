export interface IModalProps {
  mode: string
  fields: string[]
  userId?: number
  isOpen: boolean
};

type ModalEditProps = Pick<IModalProps, 'fields'>;

export interface IFormEditProps extends ModalEditProps {
  userId: number
}

export type FormProps = ModalEditProps;

export type IOptions = IFormEditProps;

export type IFormOptions = {
  options: IOptions
}

export type DeleteConfirmProps = {
  userId: number
}
