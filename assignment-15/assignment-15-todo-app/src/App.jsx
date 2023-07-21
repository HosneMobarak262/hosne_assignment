import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import TodoList from "./components/Todo";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <TodoList></TodoList>
    </div>
  )
}

export default App
