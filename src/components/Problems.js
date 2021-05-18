import React from 'react'
import { useSelector } from "react-redux"
import Easy from './Easy'
import Hard from './Hard'
import Medium from './Medium'

export default function Problems() {

    const currentDifficulty = useSelector((state) => state.changeDifficulty)

    return (
        <>
            {currentDifficulty===1&& <Easy/>}
            {currentDifficulty===2&& <Medium/>}
            {currentDifficulty===3&& <Hard/>}
        </>
    )
}
