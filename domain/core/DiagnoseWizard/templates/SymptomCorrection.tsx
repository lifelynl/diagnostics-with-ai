interface SymptomCorrectionProps {
    options: string[]
}

export const SymptomCorrection: React.FunctionComponent<SymptomCorrectionProps> = ({ options }) => {
    return (
        <div>
            <p>SymptomCorrection pick one</p>
            <select name="value">
                {options.map((option, index) => (
                    <option value={index}>{option}</option>
                ))}
            </select>
        </div>
    )
}
