import React from 'react'
import "../styles/problems.css"

export default function ProblemStatements({ problems }) {
    return (
        <table id="problems">
            <tbody>
                {problems.map((data, key) => {
                    return (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            {data.solution_src ? <td><a href={data.solution_src} target="_blank" rel="noreferrer">Solution</a></td> : null}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
