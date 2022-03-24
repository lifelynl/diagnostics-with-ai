import { useLocalObservable, observer } from 'mobx-react'
import { DynamicWizard } from '../../../infra/core/DynamicWizard/DynamicWizard'
import { uniqueId } from 'lodash'
import { FormEventHandler, useRef, useState } from 'react'
import { ExtraSymptoms } from './templates/ExtraSymptoms'
import { HowManyDays } from './templates/HowManyDays'
import { MainSymptom } from './templates/MainSymptom'
import { SymptomCorrection } from './templates/SymptomCorrection'
import { Result } from './templates/Result'
import { Button } from '../Button/Button'
import symptoms from './symptoms.json'
import Image from 'next/image'

export enum QuestionType {
    Init = 'Init',
    SymptomClarification = 'SymptomClarification',
    AmountOfDays = 'AmountOfDays',
    FollowUpSymptom = 'FollowUpSymptom',
    Conclusion = 'Conclusion',
}

export interface MagicResponseData {
    id: string
    state: QuestionType
    stateData: any
}

let previousResult: any = {}
async function askKindlyToAI(value: string): Promise<{ type: QuestionType; data: any }> {
    previousResult = await magic(previousResult.id || 'unknown', value)

    return {
        type: previousResult.state,
        data: previousResult.stateData,
    }

    // // index++

    // // if (index === 0) {
    // //     return new Promise(resolve =>
    // //         resolve({ question: 'next question' + uniqueId(), type: QuestionType.SymptomClarification })
    // //     )
    // // }

    // // if (index === 1) {
    // //     return new Promise(resolve =>
    // //         resolve({ question: 'next question' + uniqueId(), type: QuestionType.SymptomClarification })
    // //     )
    // // }

    // // if (index === 2) {
    // //     return new Promise(resolve =>
    // //         resolve({ question: 'next question' + uniqueId(), type: QuestionType.AmountOfDays })
    // //     )
    // // }

    // // if (index === 4) {
    // //     return new Promise(resolve =>
    // //         resolve({ question: 'next question' + uniqueId(), type: QuestionType.Conclusion })
    // //     )
    // // }

    // // please can you answer this question for me, thank you kind ai!
    // return new Promise(resolve =>
    //     resolve({ question: 'next question' + uniqueId(), type: QuestionType.FollowUpSymptom })
    // )
}

export const DiagnoseWizard = observer(() => {
    const dynamicWizard = useLocalObservable(
        () => new DynamicWizard([{ data: {}, type: QuestionType.Init, id: uniqueId() }])
    )

    return (
        <form onSubmit={handleOnSubmit} style={{height: '100vh', display: 'flex', flexDirection:'column', justifyContent: 'space-between'}}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <Image width={132} height={156} src={'/Danny.png'} alt={'Danny'} />
            {renderStep()}
            </div>
            <Button style={{marginBottom: 16}} type="submit">Continue</Button>
        </form>
    )

    async function handleOnSubmit(e?: any) {
        console.log(e.target.elements.value.value)
        e.preventDefault()
        const result = await askKindlyToAI(e.target.elements.value.value)
        dynamicWizard.addStep({
            id: uniqueId(),
            type: result.type,
            data: result.data,
        })
        dynamicWizard.nextStep()
    }

    function renderStep() {
        if (dynamicWizard.activeStep?.type === QuestionType.FollowUpSymptom) {
            return <ExtraSymptoms option={dynamicWizard.activeStep.data.option} />
        }

        if (dynamicWizard.activeStep?.type === QuestionType.AmountOfDays) {
            return <HowManyDays />
        }

        if (dynamicWizard.activeStep?.type === QuestionType.Init) {
            return <MainSymptom options={symptoms} />
        }

        if (dynamicWizard.activeStep?.type === QuestionType.SymptomClarification) {
            return <SymptomCorrection options={dynamicWizard.activeStep.data.options} />
        }

        if (dynamicWizard.activeStep?.type === QuestionType.Conclusion) {
            return <Result result={dynamicWizard.activeStep.data.conclusion} />
        }

        return null
    }
})

// Example POST method implementation:
async function magic(sessionId: string, input: string): Promise<any> {
    // Default options are marked with *
    const response = await fetch(`/api/ai?sessionId=${sessionId}&input=${input}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })

    return response.json() // parses JSON response into native JavaScript objects
}
