import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { db } from "./config/db.js";
import servicesRoutes from "./routes/servicesRoutes.js";

//Variables de entorno
dotenv.config();

//Configurar app
const app = express();

//Conectar BD
db();

//Definir ruta
app.use("/api/services", servicesRoutes);

//Definir puerto
const PORT = process.env.PORT || 4000;

//Arrancar app
app.listen(PORT, () => {
  console.log(colors.blue(`Servidor ejecutandose en el puerto: ${PORT}`));
});
