import React from 'react'
import "../styles/navbar.css"
import { useSelector, useDispatch } from "react-redux"
import { setEasy, setMedium, setHard } from "../actions/setDifficulty"
import { mediumProblems } from "./MediumProblems"
import { easyProblems } from "./EasyProblems"
import { hardProblems } from "./HardProblems"

export default function Navbar() {

    const currentDifficulty = useSelector((state) => state.changeDifficulty)
    const dispatch = useDispatch()

    //console.log(currentDifficulty)

    return (
        <div className="navbar-container">
            <ul className="navbar-block">
                <li className={currentDifficulty === 1 ? "easy-selected" : "easy"} onClick={() => dispatch(setEasy())}>Easy({easyProblems.length})</li>
                <li className={currentDifficulty === 2 ? "medium-selected" : "medium"} onClick={() => dispatch(setMedium())}>Medium({mediumProblems.length})</li>
                <li className={currentDifficulty === 3 ? "hard-selected" : "hard"} onClick={() => dispatch(setHard())}>Hard({hardProblems.length})</li>
            </ul>
        </div>
    )
}
