import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState(['a', 'b', 'c'])

    const handleAddTodo = (newTodoItem) => {
        const newTodo = [...todos, newTodoItem]
        setTodos(newTodo)
    }
    return (
        <main>
            <TodoInput handleAddTodo={handleAddTodo} />
            <TodoList todos={todos} />
        </main>
    )
}

export default App
