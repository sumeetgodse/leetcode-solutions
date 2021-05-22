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
            solution_src: "https://leetcode.com/problems/longest-palindromic-substring/discuss/1219351/C-Solution"
        },
        {
            id: 8,
            title: "String to Integer (atoi)",
            solution_src: "https://leetcode.com/problems/string-to-integer-atoi/discuss/1219352/C++-Solution"
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
            solution_src: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/1223779/Simple-C++-Solution"
        },
        {
            id: 22,
            title: "Generate Parentheses",
            solution_src: "https://leetcode.com/problems/generate-parentheses/discuss/1221551/C++-or-Simple-Solution-or-Stack"
        },
        {
            id: 24,
            title: "Swap Nodes in Pairs",
            solution_src: ""
        },
        {
            id: 33,
            title: "Search in Rotated Sorted Array",
            solution_src: "https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/1208131/Easy-to-Understand-or-C++-or-Binary-Search-or-100-faster"
        },
        {
            id: 34,
            title: "Find First and Last Position of Element in Sorted Array",
            solution_src: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/discuss/1223789/C++-Binary-Search-Solution"
        },
        {
            id: 36,
            title: "Valid Sudoku",
            solution_src: ""
        },
        {
            id: 48,
            title: "Rotate Image",
            solution_src: "https://leetcode.com/problems/rotate-image/discuss/1221555/Simple-C++-Solution"
        },
        {
            id: 61,
            title: "Rotate List",
            solution_src: "https://leetcode.com/problems/rotate-list/discuss/1222832/Simple-C++-Solution"
        },
        {
            id: 62,
            title: "Unique Paths",
            solution_src: "https://leetcode.com/problems/unique-paths/discuss/1193931/C++-or-Dynamic-Programming-or-0ms-or-100-faster"
        },
        {
            id: 64,
            title: "Minimum Path Sum",
            solution_src: "https://leetcode.com/problems/minimum-path-sum/discuss/1221703/Easy-C++-Solution"
        },
        {
            id: 75,
            title: "Sort Colors",
            solution_src: ""
        },
        {
            id: 78,
            title: "Subsets",
            solution_src: "https://leetcode.com/problems/subsets/discuss/1207436/Simple-Approach-or-C++"
        },
        {
            id: 80,
            title: "Remove Duplicates from Sorted Array II",
            solution_src: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/discuss/1222863/No-Extra-Space-or-100-faster-or-C++"
        },
        {
            id: 102,
            title: "Binary Tree Level Order Traversal",
            solution_src: "https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/1221548/Using-C++-or-Queue"
        },
        {
            id: 114,
            title: "Flatten Binary Tree to Linked List",
            solution_src: ""
        },
        {
            id: 215,
            title: "Kth Largest Element in an Array",
            solution_src: "https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/1219357/Simple-C++-Solution-or-Using-Priority-Queue"
        },
        {
            id: 230,
            title: "Kth Smallest Element in a BST",
            solution_src: ""
        },
        {
            id: 1423,
            title: "Maximum Points You Can Obtain from Cards",
            solution_src: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/discuss/1219365/Easy-C++-Solution"
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
                            {data.solution_src && <td><a href={data.solution_src} target="_blank">Solution</a></td>}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

