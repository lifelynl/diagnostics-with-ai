import nl2br from 'react-nl2br'
import { Title } from '../../Title/Title'
import styles from './Result.module.css'

interface ResultProps {
    result: string
}

export const Result: React.FunctionComponent<ResultProps> = ({ result }) => {
    return (
        <div className={styles.container}>
            <Title>Conclusion</Title>
            <p>{nl2br(result)}</p>
        </div>
    )
}
