import React from 'react'

export default function TodoList({ todos }) {

    return (
        <ul>
            {
                todos.map((todo, index) => {
                    return <li key={index}>
                        <p>{todo}</p>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <i className="fa-solid fa-trash-can"></i>
                    </li>
                })
            }
        </ul>
    )
}
