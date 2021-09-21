export interface IButtonProps {
  mode: string
  children: string | HTMLElement | JSX.Element
  icon?: JSX.Element
  onChange?: () => void | ((id: number) => void)
};