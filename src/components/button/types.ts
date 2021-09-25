export interface IButtonProps {
  mode: string
  children: string | HTMLElement | JSX.Element
  icon?: JSX.Element
  onClick?: () => void | ((id: number) => void)
};