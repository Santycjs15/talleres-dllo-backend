import { Router } from "express";
import { pilotoporHobby, IdExiste, ExperienciaTotal, porFaccion } from "./user.controller";
import readUsers from "./read.user.action";

// INIT ROUTES
const userRoutes = Router();

// Obtener todos los usuarios
userRoutes.get("/", readUsers);

// Obtener usuarios por hobby desde los parámetros de la URL
userRoutes.get("/hobby", pilotoporHobby);

// Obtener experiencia total de un equipo de pilotos desde los parámetros de la URL
userRoutes.get("/team", ExperienciaTotal);

//Obtener los pilotos por facción
userRoutes.get("/faction", porFaccion);

// Obtener usuarios por id desde los parámetros de la URL
userRoutes.get("/:id", IdExiste);



// EXPORT ROUTES
export default userRoutes;
