import React from 'react'
import "../styles/hard.css"

export default function Hard() {

    const hardProblems = [
        {
            id: 4,
            title: "Median of Two Sorted Arrays",
            solution_src: "https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/1216046/C++-or-Simple-Approach"
        },
        {
            id: 23,
            title: "Merge k Sorted Lists",
            solution_src: "https://leetcode.com/problems/merge-k-sorted-lists/discuss/1182290/Simple-to-Understand-C%2B%2B-Solution"
        }
    ]

    return (
        <table id="problems-hard">
            <tbody>
                {hardProblems.map((data, key) => {
                    return (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td><a href={data.solution_src} target="_blank">Solution</a></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
