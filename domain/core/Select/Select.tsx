

import { DetailedHTMLProps, OptionHTMLAttributes, SelectHTMLAttributes } from "react"
import styles from './Select.module.css'

export interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    items: DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>[]
}

export const Select: React.FunctionComponent<SelectProps> = (props) => {
    const {items, ...restProps} = props

   return <select {...restProps} className={styles.container}>
       {props.items.map((item, i ) => 
            <option key={i} {...item}>{item.children}</option>
       )}
   </select>
}