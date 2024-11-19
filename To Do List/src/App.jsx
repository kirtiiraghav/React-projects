import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState(() => {
        // Retrieve initial todos from localStorage
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : []; // Default to an empty array if none are saved
    });
    const [todo, setTodo] = useState('')

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleAddTodo = (newTodoItem) => {
        const newTodoList = [...todos, newTodoItem]
        setTodos(newTodoList)
    }

    const handleDeleteTodo = (index) => {
        const newTodoList = todos.filter((todo, todoIndex) => {
            return index !== todoIndex
        })
        setTodos(newTodoList)
    }

    const handleEditTodo = (index) => {
        const todoToBeEdited = todos[index]
        setTodo(todoToBeEdited)
        handleDeleteTodo(index)
    }

    return (
        <main>
            <TodoInput todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
            <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
        </main>
    )
}

export default App
