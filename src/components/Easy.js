import React from 'react'
import "../styles/easy.css"

export default function Easy() {

    const easyProblems = [
        {
            id: 1,
            title: "Two Sum",
            solution_src: "https://leetcode.com/problems/two-sum/discuss/1216038/C%2B%2B-or-Simple-Approach-or-0ms"
        },
        {
            id: 7,
            title: "Reverse Integer",
            solution_src: "https://leetcode.com/problems/reverse-integer/discuss/1216053/C++-or-100-faster-or-Self-Explanatory"
        },
        {
            id: 9,
            title: "Palindrome Number",
            solution_src: "https://leetcode.com/problems/palindrome-number/discuss/1216057/C++-or-Simple-Approach"
        },
        {
            id: 13,
            title: "Roman to Integer",
            solution_src: "https://leetcode.com/problems/roman-to-integer/discuss/1216059/C++-or-Hashmap-or-Simple-Approach"
        },
        {
            id: 14,
            title: "Longest Common Prefix",
            solution_src: "https://leetcode.com/problems/longest-common-prefix/discuss/1216063/Simple-Approach-or-C++"
        },
        {
            id: 20,
            title: "Valid Parentheses",
            solution_src: "https://leetcode.com/problems/valid-parentheses/discuss/1176971/Simple-Stack-Solution-or-C++-or-0ms-or-100-Faster"
        },
        {
            id: 21,
            title: "Merge Two Sorted Lists",
            solution_src: "https://leetcode.com/problems/merge-two-sorted-lists/discuss/1216069/C++-or-Simple-Approach"
        },
        {
            id: 26,
            title: "Remove Duplicates from Sorted Array",
            solution_src: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/1216073/C++-or-Stack-Approach"
        },
        {
            id: 27,
            title: "Remove Element",
            solution_src: "https://leetcode.com/problems/remove-element/discuss/1216077/Simple-Approach-or-C++-or-Erase"
        },
        {
            id: 28,
            title: "Implement strStr()",
            solution_src: "https://leetcode.com/problems/implement-strstr/discuss/1167418/100-faster-or-0ms-or-C%2B%2B-or-Without-using-inbuilt-functions"
        },
    ]

    return (
        <table id="problems-easy">
            <tbody>
                {easyProblems.map((data, key) => {
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
