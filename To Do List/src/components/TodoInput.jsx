import React, { useState } from 'react'

export default function TodoInput({ todo, setTodo, handleAddTodo }) {

    return (
        <header className='input-header'>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Enter todo...' />
            <button onClick={() => {
                if (!todo) {
                    alert('Enter todo...')
                    return
                }
                handleAddTodo(todo)
                setTodo('')
            }}>Add</button>
        </header>
    )
}
