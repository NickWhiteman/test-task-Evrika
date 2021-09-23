// import { getUserById } from "../../../data"
// import { Button } from "../../button/Button"
import { data, getUserById } from "../../../data"
import { IFormEditProps } from "../types"

export const FormEdit: React.FunctionComponent<IFormEditProps> = ({
  fields,
  userId
}) => {
  const currentUser = getUserById(userId);
  const keysUser = currentUser  && Object.keys(currentUser);

  return (
    <>
      <form onSubmit={(e) => {console.log(e)}}>
      {
        fields &&
          fields.map((field, index) => {
            if (field !== '')
              return(
                <div key={index + 1} className="content__inputField">
                  <label>{field}</label>
                  <input type='text' value={''}></input>
                </div>
              )
          })
      }
      </form>
      <div className="body__footer">
        <div className="empty"></div>
        <button
          type='submit'
          children='Обновить'></button>
      </div>
    </>
  )
}