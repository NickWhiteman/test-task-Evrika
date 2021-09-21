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

export type IOptions = Pick<IModalProps, 'userId' | 'fields'>;

export type IFormOptions = {
  options: IOptions
}
