import { promises as fs } from "fs";
import path from "path";
import { User } from "./user.model";
import readUserAction from "./read.user.action";

// DECLARE THE PATH TO JSON FILE
const jsonFilePath = path.resolve(__dirname, "../../../datos.json");

// Función para guardar la información del nuevo usuario
async function saveUserAction(newUser: User): Promise<void> {
  try {
    // Leer los usuarios existentes desde readUserAction
    const users = await readUserAction();

    // Agregar el nuevo usuario al array de usuarios
    users.push(newUser);

    // Guardar el nuevo array de usuarios en el archivo JSON
    await fs.writeFile(jsonFilePath, JSON.stringify(users, null, 2), "utf-8");
  } catch (err) {
    throw new Error("Error al guardar el usuario en la base de datos.");
  }
}

export { saveUserAction };
