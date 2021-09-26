import { FormComponent } from "./coponents/FormComponent";
import { useForm } from "react-hook-form";
import { FormUser } from "./types";
import { Button } from "../button/Button";

export const Form = () => {
  const { register, handleSubmit } = useForm<FormUser>();

  const onSubmit = handleSubmit((data: FormUser) => {
    console.log(data);
  });

  return (
    <>
      <FormComponent onSubmit={onSubmit}>
        <div className="content__inputField">
          <label htmlFor='firstName'>Фамилия</label>
          <input
            {...register('firstName')}
            id='firstName'
            type='text'/>
        </div>
        <div className="content__inputField">
          <label htmlFor='lastName'>Имя</label>
          <input
            {...register('lastName')}
            id='lastName'
            type='text'/>
        </div>
        <div className="content__inputField">
          <label htmlFor='fatherName'>Отчество</label>
          <input
            {...register('fatherName')}
            id='fatherName'
            type='text'/>
        </div>
        <div className="content__inputField">
          <label htmlFor='email'>Email</label>
          <input
            {...register('email')}
            id='email'
            type='text'/>
        </div>
        <div className="content__inputField">
          <label htmlFor='login'>Логин</label>
          <input
            {...register('login')}
            id='login'
            type='text'/>
        </div>
          {/* <button type='submit'>Создать</button> */}
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