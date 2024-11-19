import React from 'react'

export default function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {

    return (
        <ul>
            {
                todos.map((todo, index) => {
                    return <li key={index}>
                        <p>{todo}</p>
                        <div className='actions-container'>
                            <button onClick={()=>{
                                handleEditTodo(index)
                            }}> <i className="fa-solid fa-pen-to-square"></i></button>
                            <button onClick={()=>{
                                handleDeleteTodo(index)
                            }}> <i className="fa-solid fa-trash-can"></i></button>
                        </div>
                    </li>
                })
            }
        </ul>
    )
}
