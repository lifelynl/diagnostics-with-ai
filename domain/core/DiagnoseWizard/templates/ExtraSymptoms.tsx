import { Radio } from '../../Radio/Radio'
import { Title } from '../../Title/Title'

interface ExtraSymptomsProps {
    option: string
}

export const ExtraSymptoms: React.FunctionComponent<ExtraSymptomsProps> = ({ option }) => {
    return (
        <div>
            <Title>{option}</Title>
            <Radio id="yes" name="value" value="yes" label="Yes" />
            <Radio id="no" name="value" value="no" label="No" />
        </div>
    )
}
