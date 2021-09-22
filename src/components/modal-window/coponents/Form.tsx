import { useState } from "react";
import { IUser } from "../../../dashboard/types";
import { data } from "../../../data";
import { Button } from "../../button/Button";
import { FormProps } from "../types";

export const Form: React.FunctionComponent<FormProps> = ({
  fields
}) => {  
  return (
    <>
      <form onSubmit={(e) => console.log(e)}>
      {
        fields &&
        fields.map((field, index) => (
          <div key={index + 1} className="content__inputField">
            <label>{field}</label>
            <input key={index} type='text'></input>
          </div>
        ))
      }
      </form>
      <div className="body__footer">
        <Button
          mode='submit'
          children='Создать'/>
      </div>
    </>
  )
};