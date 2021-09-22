import { IFormOptions } from "../types"
import { DeleteConfirm } from "./DeleteConfirm";
import { Form } from "./Form"
import { FormEdit } from "./FormEdit"

export const getForm = (mode: string, options: IFormOptions): JSX.Element => {
  const setting = options.options;
  switch (mode) {
    case 'createUser': return (
      <Form fields={setting.fields} />
    )
    case 'editUser': return (
      <FormEdit
        fields={setting.fields}
        userId={setting.userId}/>
    )
    case 'deleteUser': return <DeleteConfirm userId={setting.userId} />
    default: return <></>
  }
}

export const headerModalName = (mode: string):string => {
  switch (mode) {
    case 'createUser': return 'Создать пользователя'
    case 'editUser': return 'Редактирование пользователя'
    case 'deleteUser': return 'Удаление пользоватля'
    default: return ''
  }
}