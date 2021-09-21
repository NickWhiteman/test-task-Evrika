import { useState } from "react";
import { IUser } from "../../../dashboard/types";
import { data } from "../../../data";
import { FormProps } from "../types";

export const Form: React.FunctionComponent<FormProps> = ({
  fields
}) => {  
  const onSubmit = () => {
    const model: IUser = {
      id: data.length,
      firstName,
      lastName,
      fatherName,
      email,
      login
    };
    return model
  };

  return (
    <>
      <form onSubmit={onSubmit}>
      {
        fields &&
        fields.map((field, index) => (
          <div key={index + 1} className="content__inputField">
            <label>{field}</label>
            <input key={index} type='text' onChange={``}></input>
          </div>
        ))
      }
      </form>
      <div className="body__footer">
        <Button
          mode='button'
          children='Создать'
          onChange={onSubmit}/>
      </div>
    </>
  )
};