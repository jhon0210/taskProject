import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        default: "pendiente",
    }
});

export default mongoose.model("Task", taskSchema);