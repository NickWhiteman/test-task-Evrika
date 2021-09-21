import { IUser } from "../../../dashboard/types"
import { getUserById } from "../../../data"
import { Button } from "../../button/Button"
import { IFormEditProps } from "../types"
import { Form } from "./Form"

export const FormEdit: React.FC<Partial<IFormEditProps>> = ({
  fields,
  userId,
}) => {
  const modelUser = getUserById(userId);
  const keysUser = modelUser  && Object.keys(modelUser);
  const onSubmit = () => {
    
  };

  return (
    modelUser &&
    <>
      <form onSubmit={}>
      {
        fields &&
        fields.map((field, index) => (
          <div key={index + 1} className="content__inputField">
            <label>{field}</label>
            <input type='text' value={modelUser[keysUser[index]]}></input>
          </div>
        ))
      }
      </form>
      <div className="body__footer">
        <Button
          mode='submit'
          children='Обновить'/>
      </div>
    </>
  )
}