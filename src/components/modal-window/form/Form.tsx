export const Form = () => {
  return (
    <>
      <form>
      {
        fields &&
        fields.map((field, index) => (
          <div key={index + 1} className="content__inputField">
            <label>{field}</label>
            {
              typeof keyUser === 'undefined'
                ? <input type='text' onChange={handleInputChange}></input>
                : <input type='text' value={modelUser[keyUser[index]]}></input>
            } 
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