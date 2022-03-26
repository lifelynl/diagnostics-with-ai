{
    /* <p>Please select your favorite Web language:</p>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label> */
}

import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styles from './Radio.module.css'

export interface RadioProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
}

export const Radio: React.FunctionComponent<RadioProps> = props => {
    return (
       
            <label className={styles.container} htmlFor={props.id ?? undefined} >
                <input className={styles.input} type={'radio'} {...props} />
                {props.label}
            </label>
   
    )
}
