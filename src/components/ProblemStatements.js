import React, { useState } from 'react'
import "../styles/problems.css"
import "../styles/search.css"
import NotFound from './NotFound'

export default function ProblemStatements({ problems }) {

    const [inputId,setInputId]=useState("")
    const [newproblems,setNewProblems]=useState(problems)

    const clear=()=>{
        setInputId("")
        setNewProblems(problems)
        document.getElementById('InputID').value=""
    }

    const search=()=>{
        const searchedProblem=problems.filter((item)=>(item.id===Number(inputId)))
        setNewProblems(searchedProblem)
    }

    return (
        <>
            <div className="search-container">
                <input type="text" id="InputID" onChange={(e) => setInputId(e.target.value)} placeholder="Search by ID..." className="input-id" />
                <button className="search" onClick={search}>Search</button>
                <button className="clear" onClick={clear}>Clear</button>
            </div>
            <table id="problems">
                <tbody>
                    {
                        newproblems!=""?
                        newproblems.map((data, key) => {
                            return (

                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    {data.solution_src ? <td style={{ fontWeight: "bolder" }}><a href={data.solution_src} target="_blank" rel="noreferrer">Solution</a></td> : null}
                                </tr>

                            )
                        })
                        :
                        <NotFound />
                    }
                </tbody>
            </table>
        </>
    )
}
