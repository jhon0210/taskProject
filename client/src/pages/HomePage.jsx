import React from 'react'

function HomePage() {
  return (
   <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Bienvenido al Proyecto de Tareas</h1>
        <p className="text-gray-400 text-lg">
          Organiza, crea y administra tus tareas de manera eficiente.<br />
        </p>
      </div>
    </div>
  )
}

export default HomePage