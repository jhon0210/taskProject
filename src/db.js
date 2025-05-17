import mongoose from "mongoose";

export const connectDB = async () => {
   try {
     await mongoose.connect('mongodb://localhost/miapp');
     console.log('Conexion exitosa');
   } catch (error) {
     console.log(error);
   }
};