import { DeleteConfirm } from "./DeleteConfirm";
import { Form } from "./Form"
import { FormEdit } from "./FormEdit"

export const getForm = (mode: string): JSX.Element => {
  switch (mode) {
    case 'createUser': return <Form />
    case 'editUser': return <FormEdit />
    case 'deleteUser': return <DeleteConfirm />
    default: return <></>
  }
};

export const headerModalName = (mode: string): string => {
  switch (mode) {
    case 'createUser': return 'Создать пользователя'
    case 'editUser': return 'Редактирование пользователя'
    case 'deleteUser': return 'Удаление пользователя'
    default: return ''
  }
};