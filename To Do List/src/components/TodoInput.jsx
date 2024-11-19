import React, { useState } from 'react'

export default function TodoInput({ handleAddTodo }) {
    const [todo, setTodo] = useState('')
    return (
        <header className='input-header'>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Enter todo...' />
            <button onClick={() => {
                handleAddTodo(todo)
            }}>Add</button>
        </header>
    )
}
