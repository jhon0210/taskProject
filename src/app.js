import express from 'express';
import morgan from 'morgan';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

app.use(express.json());

app.use('/api', tasksRoutes);

app.use(morgan('dev'));

export default app;