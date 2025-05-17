import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <nav className="bg-white shadow-md my-6 flex items-center justify-between py-4 px-8 rounded-lg">
      <div className="flex items-center gap-3">
        <span className="inline-block bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
          <span>Nuva</span>
        </span>
        <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">Proyecto de Tareas</h1>
      </div>
      <ul className="flex gap-x-2">
        <li>
          <Link
            to="/"
            className="bg-zinc-700 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors font-medium"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/tasks/new"
            className="bg-zinc-700 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors font-medium"
          >
            Agregar Tarea
          </Link>
        </li>
        <li>
          <Link
            to="/tasks"
            className="bg-zinc-700 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors font-medium"
          >
            Listar Tareas
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar