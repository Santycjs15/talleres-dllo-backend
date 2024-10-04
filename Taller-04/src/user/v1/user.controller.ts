import { Request, Response } from "express";
import readUserAction from "./read.user.action";
import { User } from "./user.model";

// Punto 1: Obtener usuarios por hobby
async function UsuarioporHobby(req: Request, res: Response) {
  try {
    const { hobby } = req.query;

    if (!hobby) {
      return res.status(400).json({ message: "Hobby query parameter is required" });
    }

    const users = await readUserAction();
    const filteredUsers = users.filter((user: User) => user.hobbies.includes(hobby as string));

    if (filteredUsers.length === 0) {
      return res.status(404).json({ message: `No users found with hobby: ${hobby}` });
    }

    // Devuelve solo los nombres de los usuarios que tienen el hobby
    const userNames = filteredUsers.map(user => user.name);
    res.status(200).json({
      message: `Users with hobby: ${hobby}`,
      users: userNames,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching users by hobby" });
  }
}

//Punto 2:  retorne si el usuario con el id enviado existe.

// Verificar si el id del usuario existe
async function IdExiste(req: Request, res: Response): Promise<Response> {  
  try {
    const { id } = req.params;
    const users = await readUserAction();

    // Convierte el id a número ya que en datos.json los ids son numéricos
    const user = users.find((user: User) => user.id === Number(id));

    if (!user) {
      return res.status(404).json({ message: `El usuario con el id: ${id} no existe` });
    }

    return res.status(200).json({ message: `El usuario con el id: ${id} sí existe` });
  } catch (err) {
    return res.status(500).json({ message: "Error fetching user by id" });
  }
}


// EXPORT CONTROLLER FUNCTIONS
export { UsuarioporHobby };

export {IdExiste};


