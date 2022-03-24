import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import styles from './Button.module.css'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
   return <button {...props} className={styles.container}>{props.children}</button>
}