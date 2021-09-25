export interface IModalProps {
  mode: string
  userId?: number
};

type ModalEditProps = {
  fields: string[]
}

export interface IFormEditProps extends ModalEditProps {
  userId: number
};

export type FormProps = ModalEditProps;

