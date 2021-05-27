import React from 'react'
import { useSelector } from "react-redux"
import { mediumProblems } from "./MediumProblems"
import { easyProblems } from "./EasyProblems"
import { hardProblems } from "./HardProblems"
import ProblemStatements from './ProblemStatements'
import "../styles/search.css"

export default function Problems() {

    const currentDifficulty = useSelector((state) => state.changeDifficulty)

    return (
        <>
            {currentDifficulty === 1 && <ProblemStatements problems={easyProblems} />}
            {currentDifficulty === 2 && <ProblemStatements problems={mediumProblems} />}
            {currentDifficulty === 3 && <ProblemStatements problems={hardProblems} />}
        </>
    )
}
