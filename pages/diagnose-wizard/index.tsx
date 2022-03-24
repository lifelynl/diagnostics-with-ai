import type { NextPage } from 'next'
import { DiagnoseWizard } from '../../domain/core/DiagnoseWizard/DiagnoseWizard'
import styles from "../../domain/core/Button/Button.module.css";

const Home: NextPage = () => {

  return (
    <div className={styles.background}>
      <DiagnoseWizard />
    </div>
  )
}

export default Home
