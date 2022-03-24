
import { Select } from '../../Select/Select'
import styles from './MainSymptom.module.css'


interface MainSymptomProps {
    options: string[]
}

export const MainSymptom: React.FunctionComponent<MainSymptomProps> = ({options}) => {
    return (
        <div className={styles.mainSymptom}>
            <h1>What is your most prevalent symptom?</h1>

            <Select
                id={'value'}
                name="value"
                items={options.map(option => ({value: option, label: option.replace(/_/g, ' ') }))}
             />
        </div>
    )
}
