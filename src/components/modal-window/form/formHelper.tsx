import { Form } from "./Form"
import { FormEdit } from "./FormEdit"

export const getForm = (mode: string): JSX.Element => {
  switch (mode) {
    case 'createUser': return <Form />
    case 'editUser': return <FormEdit />
    // case 'delete': return <DeleteConfirm />
    default: return <></>
  }
}