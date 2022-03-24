import { DetailedHTMLProps, HTMLAttributes } from "react"
import styles from './Title.module.css'

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export const Title: React.FunctionComponent<ButtonProps> = (props) => {
   return <h1 {...props} className={styles.container}>{props.children}</h1>
}