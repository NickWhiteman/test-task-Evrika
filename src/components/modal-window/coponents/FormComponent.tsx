import React from "react";

interface IForm {
  children: any
  onSubmit: () => void
}

export const FormComponent: React.FC<IForm> = ({children, ...props}, onSubmit) => {
  return (
    <form {...props} onSubmit={onSubmit} className='body__form' noValidate>
      {children}
    </form>
  );
};