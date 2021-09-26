import { FormComponent } from "./coponents/FormComponent";
import { useForm } from "react-hook-form";
import { FormUser } from "./types";
import { Button } from "../button/Button";
import { createUserHandler, newUserObject } from "../../data";
import { useDispatch } from "react-redux";
import { DashboardActions } from "../../dashboard/reducer";

export const Form = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<FormUser>();

  function onSubmit(data: FormUser) {
    const newUser = newUserObject(data);
    createUserHandler(newUser);
    dispatch(DashboardActions.toggleModal());
  };

  return (
    <>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
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
        <div className="body__footer">
          {/* <button type='submit'>send</button> */}
            <Button
              mode='submit'
              children='Создать'></Button>
        </div>
      </FormComponent>
    </>
  )
};