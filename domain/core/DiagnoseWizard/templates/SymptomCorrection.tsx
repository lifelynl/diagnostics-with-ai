import { Select } from "../../Select/Select"

interface SymptomCorrectionProps {
    options: string[]
}

export const SymptomCorrection: React.FunctionComponent<SymptomCorrectionProps> = ({ options }) => {
    return (
        <div>
            <p>Symptom correction pick one</p>

            <Select
                id={'value'}
                name="value"
                items={options.map(option => ({value: option, label: option.replace(/_/g, ' ') }))}
             />
        </div>
    )
}
