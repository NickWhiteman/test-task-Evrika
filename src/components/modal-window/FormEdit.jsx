import { getUserById } from "../../data";
import { useForm } from "react-hook-form";
import { FormComponent } from "./coponents/FormComponent";
import { Button } from "../button/Button";
import { Input } from "./coponents/Input";
import { useSelector } from "react-redux";
import {selectorGetUsers} from '../../dashboard/selectors'



export const FormEdit = ({
  userId
}) => {
  const users = useSelector(selectorGetUsers);
  const currentUser = users.map(user => user.id === userId && user);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      fatherName: currentUser.fatherName,
      email: currentUser.email,
      login: currentUser.login,
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id='firstName'
          type='text'
          label='Фамилия'
          name='firstName' />
        <Input
          ref={register}
          id='lastName'
          type='text'
          label='Имя'
          name='firstName' />
        <Input
          ref={register}
          id='fatherName'
          type='text'
          label='Отчество'
          name='fatherName' />
        <Input
          ref={register}
          id='email'
          type='text'
          label='Email'
          name='email' />
        <Input
          ref={register}
          id='login'
          type='text'
          label='Логин'
          name='login' />
      </FormComponent>
        <div className="body__footer">
          <div className="empty"></div>
            <Button
              mode='submit'
              children='Создать'></Button>
        </div>
    </>
  )
}