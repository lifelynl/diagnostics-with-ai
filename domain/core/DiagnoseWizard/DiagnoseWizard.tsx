import { useLocalObservable, observer } from 'mobx-react'
import { DynamicWizard } from '../../../infra/core/DynamicWizard/DynamicWizard'
import  { uniqueId } from 'lodash'


export const DiagnoseWizard = observer(() => {

    const dynamicWizard = useLocalObservable(() => new DynamicWizard([ {content: 'testing my description', id: uniqueId(), }, {content: 'testing my description2', id: uniqueId(), }, {content: 'testing my description3', id: uniqueId() }]))
    console.log('JOE JOE', dynamicWizard.activeStep)

    return (
        <div>
            <p>{dynamicWizard.activeStep?.content}</p>
            <button onClick={() => dynamicWizard.previousStep()}>previous</button>
            <button onClick={() => dynamicWizard.nextStep()}>next</button>
            <button onClick={() => dynamicWizard.addStep({
                content: 'New step',
                id: uniqueId()
            })}>add step</button>
        </div>
    )
})