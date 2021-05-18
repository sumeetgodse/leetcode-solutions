import React from 'react'
import "../styles/medium.css"

export default function Medium() {

    const mediumProblems = [
        {
            id: 2,
            title: "Add Two Numbers",
            solution_src: "https://leetcode.com/problems/add-two-numbers/discuss/1216080/C++-or-Using-Carry"
        },
        {
            id: 3,
            title: "Longest Substring Without Repeating Characters",
            solution_src: ""
        },
        {
            id: 5,
            title: "Longest Palindromic Substring",
            solution_src: ""
        },
        {
            id: 8,
            title: "String to Integer (atoi)",
            solution_src: ""
        },
        {
            id: 11,
            title: "Container With Most Water",
            solution_src: ""
        },
        {
            id: 15,
            title: "3Sum",
            solution_src: ""
        },
        {
            id: 17,
            title: "Letter Combinations of a Phone Number",
            solution_src: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/1176157/C%2B%2B-or-100-Faster-or-Easy-to-Understand-or-Using-vector-as-a-queue"
        },
        {
            id: 19,
            title: "Remove Nth Node From End of List",
            solution_src: ""
        },
        {
            id: 22,
            title: "Generate Parentheses",
            solution_src: ""
        },
        {
            id: 24,
            title: "Swap Nodes in Pairs",
            solution_src: ""
        },
    ]

    return (
        <table id="problems-medium">
            <tbody>
                {mediumProblems.map((data, key) => {
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
