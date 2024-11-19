import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState(['a', 'b', 'c'])
    const [todo, setTodo] = useState('')

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
