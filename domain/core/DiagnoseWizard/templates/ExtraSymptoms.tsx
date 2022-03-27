import { Radio } from '../../Radio/Radio'
import { Title } from '../../Title/Title'
import styles from './ExtraSymptoms.module.css'

interface ExtraSymptomsProps {
    option: string
}

export const ExtraSymptoms: React.FunctionComponent<ExtraSymptomsProps> = ({ option }) => {
    return (
        <div className={styles.container}>
            <Title>Are you experiencing the following symptom: {option.replace(/_/g, ' ')}</Title>
            <Radio id="yes" name="value" value="yes" label="Yes" />
            <Radio id="no" name="value" value="no" label="No" />
        </div>
    )
}
