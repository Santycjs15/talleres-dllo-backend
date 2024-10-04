import { Router } from "express";
import { UsuarioporHobby } from "./user.controller";
import readUsers from "./read.user.action";
import {IdExiste} from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// Obtener todos los usuarios
userRoutes.get("/", readUsers);

// Obtener usuarios por hobby desde los parámetros de la URL
userRoutes.get("/hobby", UsuarioporHobby);

// Obtener usuarios por id desde los parámetros de la URL
userRoutes.get("/:id", IdExiste);

// EXPORT ROUTES
export default userRoutes;
