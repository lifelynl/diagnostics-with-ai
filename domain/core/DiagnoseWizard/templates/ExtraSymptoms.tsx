import { Radio } from "../../Radio/Radio"

interface ExtraSymptomsProps {
    title: string
}
export const ExtraSymptoms: React.FunctionComponent<ExtraSymptomsProps> = ({title}) => {

    return <div>
        <h1>{title}</h1>
        <Radio id="yes" name="value" value="yes" />
        <Radio id="no" name="value" value="no" />
    </div>
}