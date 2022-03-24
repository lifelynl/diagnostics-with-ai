import styles from './MainSymptom.module.css'

export const MainSymptom: React.FunctionComponent<{}> = () => {
    return (
        <div className={styles.mainSymptom}>
            <h1>What is your most prevalent symptom?</h1>
            <input type="text" name="value" />
        </div>
    )
}
