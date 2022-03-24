import { makeAutoObservable } from 'mobx'
import { QuestionType } from '../../../domain/core/DiagnoseWizard/DiagnoseWizard'

interface Step {
    id: string
    // formState:  FormState
    type: QuestionType
    data: any
}

export class DynamicWizard {
    public steps: Step[] = []
    public activeStepId: string | undefined = undefined

    public get activeStepIndex() {
        return this.steps.findIndex(step => {
            return step.id === this.activeStepId
        })
    }

    public get lastIndexIsActive() {
        const eyJongenJeGaatIetsTeVerTerug = this.activeStepIndex === this.steps.length - 1
        return eyJongenJeGaatIetsTeVerTerug
    }

    public get firstIndexIsActive() {
        const eyJongenJeGaatIetsTeVer = this.activeStepIndex === 0
        return eyJongenJeGaatIetsTeVer
    }

    public get activeStep() {
        return this.steps.find(step => {
            return step.id === this.activeStepId
        })
    }

    constructor(knownSteps: Step[]) {
        makeAutoObservable(this)
        this.steps = knownSteps
        this.activeStepId = this.steps[0]?.id
    }

    public addStep(newStep: Step) {
        this.steps.push(newStep)
    }

    public nextStep() {
        if (this.lastIndexIsActive) {
            return
        }

        this.activeStepId = this.steps[this.activeStepIndex + 1].id
    }

    public previousStep() {
        if (this.firstIndexIsActive) {
            return
        }

        this.activeStepId = this.steps[this.activeStepIndex - 1].id
    }
}
