import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/tasks" element={<TasksPage/>} />
        <Route path="/add-task" element={<TaskFormPage/>} />
        <Route path="/tasks/:id" element={<TaskFormPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App