// import { Button } from "../../button/Button";
import { FormProps } from "../types";

export const Form: React.FunctionComponent<FormProps> = ({
  fields
}) => {  
  return (
    <>
      <form onSubmit={(e) => console.log(e)}>
        {
          fields.map((field, index) => {
            if(field !== '')
            return(
              <div key={index + 1} className="content__inputField">
                <label>{field}</label>
                <input key={index + 1} type='text'></input>
              </div>
            )
          })
      }
      </form>
      <div className="body__footer">
        <div className="empty"></div>
        {/* <Button
          mode='submit'
          children='Создать'></Button> */}
          <button className='dashboard__button' type='submit'>Submit</button>
      </div>
    </>
  )
};