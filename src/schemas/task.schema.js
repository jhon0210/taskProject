import {z} from 'zod';

export const createTaskSchema = z.object({
  titulo: z.string({
    required_error: 'El título es requerido',
  }),
    descripcion: z.string({
        required_error: 'La descripción es requerida',
    }),
})