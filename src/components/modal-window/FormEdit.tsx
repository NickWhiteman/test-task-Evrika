import { useForm } from "react-hook-form";
import { FormComponent } from "./coponents/FormComponent";
import { Button } from "../button/Button";
import { useSelector } from "react-redux";
import {selectorGetUsers} from '../../dashboard/selectors'
import { FormUser } from "./types";
import { selectUserIdEdition } from "./selectors";

export const FormEdit: React.FunctionComponent = () => {
  const userId = useSelector(selectUserIdEdition)
  const users = useSelector(selectorGetUsers);
  const currentUser = users.find(user => user.id === userId);
  const { register, handleSubmit } = useForm<FormUser>({
    defaultValues: {
      firstName: currentUser ? currentUser.firstName : '',
      lastName: currentUser ? currentUser.lastName : '',
      fatherName: currentUser ? currentUser.fatherName : '',
      email: currentUser ? currentUser.email : '',
      login: currentUser ? currentUser.login : '',
    }
  });

  const onSubmit = handleSubmit((data: FormUser) => {
    console.log(data);
  })

  return (
    <>
      <FormComponent onSubmit={onSubmit}>
        <div className="content__inputField">
          <label htmlFor='firstName'>Фамилия</label>
          <input
            {...register}
            id='firstName'
            type='text'
            name='firstName' />
        </div>
        <div className="content__inputField">
          <label htmlFor='lastName'>Имя</label>
          <input
            {...register}
            id='lastName'
            type='text'
            name='firstName' />
        </div>
        <div className="content__inputField">
          <label htmlFor='fatherName'>Отчество</label>
          <input
            {...register}
            id='fatherName'
            type='text'
            name='fatherName' />
        </div>
        <div className="content__inputField">
          <label htmlFor='email'>Email</label>
          <input
            {...register}
            id='email'
            type='text'
            name='email' />
        </div>
        <div className="content__inputField">
          <label htmlFor='login'>Логин</label>
          <input
            {...register}
            id='login'
            type='text'
            name='login' />
        </div>
        <div className="body__footer">
          <div className="empty"></div>
            <Button
              mode='submit'
              children='Обновить'></Button>
        </div>
      </FormComponent>
    </>
  )
}