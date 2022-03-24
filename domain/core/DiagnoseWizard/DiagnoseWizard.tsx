import { useLocalObservable, observer } from 'mobx-react'
import { DynamicWizard } from '../../../infra/core/DynamicWizard/DynamicWizard'
import  { uniqueId } from 'lodash'
import { FormEventHandler, useRef, useState } from 'react'
import { ExtraSymptoms } from './templates/ExtraSymptoms'
import { HowManyDays } from './templates/HowManyDays'
import { MainSymptom } from './templates/MainSymptom'
import { SymptomCorrection } from './templates/SymptomCorrection'
import { Result } from './templates/Result'
import { Button } from '../Button/Button'

export enum QuestionType {
    MainSymptom = 'MainSymptom',
    SymptomCorrection = 'SymptomCorrection',
    HowManyDays = 'HowManyDays',
    ExtraSymptoms = 'ExtraSymptoms',
    Result = 'Result'
}

let index = 0
async function askKindlyToAI(value: string): Promise<{ question: string, type: QuestionType }> {
    index++

    if(index === 0) {
        return new Promise(resolve => resolve({ question: 'next question' + uniqueId(), type: QuestionType.SymptomCorrection }))
    }

    if(index === 1) {
        return new Promise(resolve => resolve({ question: 'next question' + uniqueId(), type: QuestionType.SymptomCorrection }))
    }

    if(index === 2) {
        return new Promise(resolve => resolve({ question: 'next question' + uniqueId(), type: QuestionType.HowManyDays }))
    }

    if(index === 4) {
        return new Promise(resolve => resolve({ question: 'next question' + uniqueId(), type: QuestionType.Result }))
    }

    // please can you answer this question for me, thank you kind ai!
    return new Promise(resolve => resolve({ question: 'next question' + uniqueId(), type: QuestionType.ExtraSymptoms }))
}

export const DiagnoseWizard = observer(() => {
    const dynamicWizard = useLocalObservable(() => new DynamicWizard([ {content: 'Main symptom?', type: QuestionType.MainSymptom, id: uniqueId() }]))

    return (
        <form onSubmit={handleOnSubmit}>
            {/* {renderStep()} */}
            <ExtraSymptoms title={''} />
            <Button type='submit'>Continue</Button>
        </form>
    )

    async function handleOnSubmit(e?: any) {
        console.log(e.target.elements.value.value)
        e.preventDefault()
        const result = await askKindlyToAI(e.target.elements.value.value)
        dynamicWizard.addStep({
            content: result.question,
            type: result.type,
            id: uniqueId()
        })
        dynamicWizard.nextStep()
    }

    function renderStep() {
        if(dynamicWizard.activeStep?.type === QuestionType.ExtraSymptoms) {
            return <ExtraSymptoms title={''} />
        }

        if(dynamicWizard.activeStep?.type === QuestionType.HowManyDays) {
            return <HowManyDays />
        }

        if(dynamicWizard.activeStep?.type === QuestionType.MainSymptom) {
            return <MainSymptom />
        }
        
        if(dynamicWizard.activeStep?.type === QuestionType.SymptomCorrection) {
            return <SymptomCorrection />
        }

        if(dynamicWizard.activeStep?.type === QuestionType.Result) {
            return <Result />
        }

        return null
    }
})