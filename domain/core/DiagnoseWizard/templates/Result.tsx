import nl2br from 'react-nl2br'

interface ResultProps {
    result: string
}

export const Result: React.FunctionComponent<ResultProps> = ({ result }) => {
    return (
        <div>
            <h1>Conclusion</h1>
            <p>{nl2br(result)}</p>
        </div>
    )
}
