import { times } from "lodash"
import { Select } from "../../Select/Select"
import { Title } from "../../Title/Title"
import styles from './HowManyDays.module.css'

export const HowManyDays: React.FunctionComponent<{}> = () => {
return<div className={styles.container}>
        <Title>How long have you been experiencing these symptoms?</Title>
        <Select id={'value'} name="value" 
        className={styles.input}
            items={times(30, (num) => {
                return { value: num, label: `${num} Days` }
            })} 
        />
    </div>
}
