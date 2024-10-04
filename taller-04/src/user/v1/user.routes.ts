import { Router } from "express";
import { pilotoporHobby, IdExiste, ExperienciaTotal, porFaccion, registrarUsuario } from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// Obtener todos los usuarios

userRoutes.post("/", registrarUsuario);

// Obtener usuarios por hobby desde los parámetros de la URL
userRoutes.get("/hobby", pilotoporHobby);

// Obtener experiencia total de un equipo de pilotos desde los parámetros de la URL
userRoutes.get("/team-experience", ExperienciaTotal);

//Obtener los pilotos por facción
userRoutes.get("/by-faction", porFaccion);

// Obtener usuarios por id desde los parámetros de la URL
userRoutes.get("/exists", IdExiste);



// EXPORT ROUTES
export default userRoutes;
