import type { NextPage } from 'next'
import { DiagnoseWizard } from '../../domain/core/DiagnoseWizard/DiagnoseWizard'

const Home: NextPage = () => {

  return (
    <div >
      <DiagnoseWizard />
    </div>
  )
}

export default Home
