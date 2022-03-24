import { times } from "lodash"
import { Select } from "../../Select/Select"
import { Title } from "../../Title/Title"

export const HowManyDays: React.FunctionComponent<{}> = () => {
return<>
        <Title>How long have you been experiencing these symptoms?</Title>
        <Select id={'value'} name="value" 
            items={times(30, (num) => {
                return { value: num, label: `${num} Days` }
            })} 
        />
    </>
}
