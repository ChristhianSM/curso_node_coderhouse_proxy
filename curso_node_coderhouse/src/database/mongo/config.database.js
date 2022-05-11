import mongoose from "mongoose";
import dotenv from 'dotenv';
//Para leer variables de entorno
dotenv.config();

const dbConnection = () => {
    try {
        mongoose.connect("mongodb+srv://userdbecommerce:cocina142@cluster0.r8wpj.mongodb.net/ecommercedb?retryWrites=true&w=majority", { useNewUrlParser: true });
    } catch (error) {
        console.log("error ---->", error);
        throw new Error('Error a la hora de iniciar la base de datos')
    }
}

export {
    dbConnection
}