import { times } from "lodash"
import { Select } from "../../Select/Select"

export const HowManyDays: React.FunctionComponent<{}> = () => {
return <Select id={'value'} name="value" 
    items={times(30, (num) => {
        return { value: num, label: `${num} Days` }
    })} 
    />
}
