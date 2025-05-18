import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching tasks' });
    }
};

export const createTask = async (req, res) => {
    try {
        const { titulo, descripcion, estado } = req.body;
        const newTask = new Task({ titulo, descripcion, estado });
        const saveTask = await newTask.save();
        res.json(saveTask);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating task' });
    }
};

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (error) {
        return res.status(500).json({ message: 'Task not found' });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: 'Task not found' });
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (error) {
        return res.status(500).json({ message: 'Task not found' });
    }
};

