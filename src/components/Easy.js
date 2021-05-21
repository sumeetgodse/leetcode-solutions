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
            solution_src: ""
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
        {
            id: 35,
            title: "Search Insert Position",
            solution_src: "https://leetcode.com/problems/search-insert-position/discuss/1217157/C++-or-Binary-Search-Modified"
        },
        {
            id: 53,
            title: "Maximum Subarray",
            solution_src: "https://leetcode.com/problems/maximum-subarray/discuss/1217161/Simple-C++-Solution"
        },
        {
            id: 58,
            title: "Length of Last Word",
            solution_src: ""
        },
        {
            id: 69,
            title: "Sqrt(x)",
            solution_src: ""
        },
        {
            id: 83,
            title: "Remove Duplicates from Sorted List",
            solution_src: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/discuss/1171372/Simple-or-Easy-to-understand-or-C++"
        },
        {
            id: 88,
            title: "Merge Sorted Array",
            solution_src: "https://leetcode.com/problems/merge-sorted-array/discuss/1202289/Traversing-arrays-from-the-end-or-O(m+n)-or-C++"
        },
        {
            id: 94,
            title: "Binary Tree Inorder Traversal",
            solution_src: "https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/1212270/Recursion-or-C++-or-0ms-or-Simple-to-Understand"
        },
        {
            id: 104,
            title: "Maximum Depth of Binary Tree",
            solution_src: ""
        },
        {
            id: 108,
            title: "Convert Sorted Array to Binary Search Tree",
            solution_src: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/discuss/1213456/Simple-Recursive-Binary-Search-Approach-or-C++"
        },
        {
            id: 110,
            title: "Balanced Binary Tree",
            solution_src: "https://leetcode.com/problems/balanced-binary-tree/discuss/1221575/C++-Recursion-Solution"
        },
        {
            id: 121,
            title: "Best Time to Buy and Sell Stock",
            solution_src: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/1164651/Simple-Self-Explanatory-C++-Solution"
        },
        {
            id: 136,
            title: "Single Number",
            solution_src: ""
        },
        {
            id: 169,
            title: "Majority Element",
            solution_src: ""
        },
        {
            id: 203,
            title: "Remove Linked List Elements",
            solution_src: ""
        },
        {
            id: 206,
            title: "Reverse Linked List",
            solution_src: "https://leetcode.com/problems/reverse-linked-list/discuss/1202158/Simple-Stack-Solution-or-C++-or-Easy-to-understand"
        },
        {
            id: 237,
            title: "Delete Node in a Linked List",
            solution_src: "https://leetcode.com/problems/delete-node-in-a-linked-list/discuss/1217095/Simple-C++-Solution"
        },
        {
            id: 509,
            title: "Fibonacci Number",
            solution_src: ""
        },
        {
            id: 589,
            title: "N-ary Tree Preorder Traversal",
            solution_src: ""
        },
        {
            id: 671,
            title: "Second Minimum Node In a Binary Tree",
            solution_src: "https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/discuss/1213504/C++-or-0ms-or-Self-Explanatory-Approach"
        },
        {
            id: 1480,
            title: "Running Sum of 1d Array",
            solution_src: ""
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
                            {data.solution_src && <td><a href={data.solution_src} target="_blank">Solution</a></td>}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
