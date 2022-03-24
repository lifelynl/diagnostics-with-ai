

import { DetailedHTMLProps, OptionHTMLAttributes, SelectHTMLAttributes } from "react"
import styles from './Select.module.css'
import ReactSelect from 'react-select';

export interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    items: DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>[]
}

export const Select: React.FunctionComponent<SelectProps> = (props) => {
    const {items, ...restProps} = props

   return <ReactSelect
            options={items}
            name={props.name}
        />

}
