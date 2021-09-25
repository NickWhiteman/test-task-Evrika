import { FormComponent } from "./coponents/FormComponent";
import { useForm } from "react-hook-form";
import { FormUser } from "./types";
import { Button } from "../button/Button";

export const Form = () => {
  const { register, handleSubmit } = useForm<FormUser>();

  const onSubmit = (data: FormUser) => {
    console.log(data);
  }

  return (
    <>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
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
              children='Создать'></Button>
        </div>
      </FormComponent>
    </>
  )
};