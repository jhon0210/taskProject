import {useForm} from 'react-hook-form';
import {useTasks} from '../context/TasksContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { get } from 'mongoose';

function TaskFormPage() {

  const {register, handleSubmit, setValue} = useForm(); 
  const {createTask, getTask, updateTask} = useTasks(); 
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id && params.id !== "new") {
       const task = await getTask(params.id);
       console.log(task);
       setValue('titulo', task.titulo);
       setValue('descripcion', task.descripcion);
      }
    }
    loadTask();
  }, [])
 
  const onSubmit = handleSubmit((data) => {
    if (params.id && params.id !== "new") {
      updateTask(params.id, data)
    } else {
      createTask(data);
    }
  navigate('/tasks');
  });

  return (
    <div className='bg-white shadow-lg max-w-md w-full p-10 rounded-md'>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Titulo'
            {...register('titulo')}
            className='w-full bg-gray-100 text-gray-900 px-4 py-2 rounded-md my-2'
            autoFocus />
            <textarea rows="3" placeholder='Descripcion'
            {...register('descripcion')}
            className='w-full bg-gray-100 text-gray-900 px-4 py-2 rounded-md my-2'>
            </textarea>
            <button className="w-full bg-zinc-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4 transition-colors">Save</button>
        </form>
    </div>
  )
}

export default TaskFormPage