import { IButtonProps } from "./types";
import './style/style.css';

export const Button: React.FunctionComponent<IButtonProps> = ({
  mode,
  children,
  icon,
  onClick
}) => {
  switch (mode) {
    case 'row-button':
      return (
        <button
          className='row__button'
          type='button'
          onClick={onClick}>{children}</button>
      )
    case 'button':
      return (
        <button
          className='dashboard__button'
          type='button'
          onClick={onClick}>{icon}{children}</button>
      )
    case 'submit':
      return (
        <button
          className='form__button'
          type='submit'>{children}</button>
      )
    default:
      return <></>;
  };
};