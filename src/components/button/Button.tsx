import { IButtonProps } from "./types";
import './style/style.css';

export const Button: React.FunctionComponent<Partial<IButtonProps>> = ({
  mode,
  children,
  icon,
  onChange
}) => {
  switch (mode) {
    case 'row-button':
      return (
        <button
          className='row__button'
          type='button'>{children}</button>
      )
    case 'button':
      return (
        <button
          className='dashboard__button'
          type='button'
          onChange={onChange}>{icon}{children}</button>
      )
    case 'submit':
      return (
        <button
          className='form__button'
          type='submit'></button>
      )
    default:
      return <></>;
  };
};