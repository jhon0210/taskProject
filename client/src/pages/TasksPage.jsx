import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

function TasksPage() {
  const {getTasks, tasks, deleteTask} = useTasks();
  useEffect(() => {
    getTasks()
  }, [])

  return (
   <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-3xl">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-zinc-700 text-white text-left text-lg font-semibold">Título</th>
              <th className="py-3 px-6 bg-zinc-700 text-white text-left text-lg font-semibold">Descripción</th>
              <th className="py-3 px-6 bg-zinc-700 text-white text-left text-lg font-semibold">Estado</th>
              <th className="py-3 px-6 bg-zinc-700 text-white text-left text-lg font-semibold">Acción</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-4 px-6 text-center text-gray-500">
                  No hay tareas registradas.
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task._id} className="border-b hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-6">{task.titulo}</td>
                  <td className="py-3 px-6">{task.descripcion}</td>
                  <td className="py-3 px-6">{task.estado}</td>
                  <td className="py-3 px-6">
                    <div className="flex gap-2">
                      <Link to={`/tasks/${task._id}`} className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded transition-colors">
                        Editar
                      </Link>
                      <button onClick={() => {
                        deleteTask(task._id)
                      }}className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors">
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TasksPage