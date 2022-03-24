interface ResultProps {
    result: string
}

export const Result: React.FunctionComponent<ResultProps> = ({ result }) => {
    return (
        <div>
            <h1>Conclusion</h1>
            <p>{result}</p>
        </div>
    )
}
