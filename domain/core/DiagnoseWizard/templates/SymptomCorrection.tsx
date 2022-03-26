import { Select } from "../../Select/Select"
import { Title } from "../../Title/Title"
import styles from './SymptomCorrection.module.css'

interface SymptomCorrectionProps {
    options: string[]
}

export const SymptomCorrection: React.FunctionComponent<SymptomCorrectionProps> = ({ options }) => {
    return (
        <div className={styles.container}>
            <Title>Symptom correction pick one</Title>

            <Select
                id={'value'}
                name="value"
                items={options.map(option => ({value: option, label: option.replace(/_/g, ' ') }))}
             />
        </div>
    )
}
