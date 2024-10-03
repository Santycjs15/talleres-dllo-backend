import { Router } from "express";
import { UsuarioporHobby } from "./user.controller";
import readUsers from "./read.user.action";

// INIT ROUTES
const userRoutes = Router();

// Obtener todos los usuarios
userRoutes.get("/", readUsers);

// Obtener usuarios por hobby desde los parámetros de la URL
userRoutes.get("/:hobby", UsuarioporHobby);

// EXPORT ROUTES
export default userRoutes;
