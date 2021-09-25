import { FormComponent } from "./coponents/FormComponent";
import { useForm } from "react-hook-form";
import { Input } from "./coponents/Input";

export const Form = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      fatherName: '',
      email: '',
      login: ''
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
          label='Фамилия'
          name='firstName' />
        <Input
          ref={register}
          id='lastName'
          label='Имя'
          name='firstName' />
        <Input
          ref={register}
          id='fatherName'
          label='Отчество'
          name='fatherName' />
        <Input
          ref={register}
          id='email'
          label='Email'
          name='email' />
        <Input
          {...register}
          id='login'
          label='Логин'
          name='login' />
      </FormComponent>
        <div className="body__footer">
          <div className="empty"></div>
            <button
              type='submit'
              children='Создать'></button>
        </div>
    </>
  )
};