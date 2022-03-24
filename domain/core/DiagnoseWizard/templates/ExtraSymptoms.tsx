import { Radio } from '../../Radio/Radio'

interface ExtraSymptomsProps {
    option: string
}

export const ExtraSymptoms: React.FunctionComponent<ExtraSymptomsProps> = ({ option }) => {
    return (
        <div>
            <h1>{option}</h1>
            <Radio id="yes" name="value" value="yes" label="Yes" />
            <Radio id="no" name="value" value="no" label="No" />
        </div>
    )
}
