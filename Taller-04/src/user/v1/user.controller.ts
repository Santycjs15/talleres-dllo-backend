import { Request, Response } from "express";
import readUserAction from "./read.user.action";
import { User } from "./user.model";

// Filtrar usuarios por hobby desde query string
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

// EXPORT CONTROLLER FUNCTIONS
export { UsuarioporHobby };


