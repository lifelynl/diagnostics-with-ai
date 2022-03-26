
import { Select } from '../../Select/Select'
import { Title } from '../../Title/Title'
import styles from './MainSymptom.module.css'


interface MainSymptomProps {
    options: string[]
}

export const MainSymptom: React.FunctionComponent<MainSymptomProps> = ({options}) => {
    return (
        <div className={styles.container}>
            <Title>What is your most prevalent symptom?</Title>

            <Select
                id={'value'}
                name="value"
                items={options.map(option => ({value: option, label: option.replace(/_/g, ' ') }))}
             />
        </div>
    )
}
