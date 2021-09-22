import { IUser } from "../../../dashboard/types";
import { getUserById } from "../../../data"
import { Button } from "../../button/Button"
import { IFormEditProps } from "../types"

export const FormEdit: React.FunctionComponent<IFormEditProps> = ({
  fields,
  userId
}) => {
  const currentUser: IUser = getUserById(userId);
  const keysUser = currentUser  && Object.keys(currentUser);

  return (
    <>
      <form onSubmit={(e) => {console.log(e)}}>
      {
        fields &&
        fields.map((field, index) => (
          <div key={index + 1} className="content__inputField">
            <label>{field}</label>
            <input type='text' value={currentUser[keysUser[index]]}></input>
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