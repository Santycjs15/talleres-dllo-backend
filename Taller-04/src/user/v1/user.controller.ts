import { Request, Response } from "express";
import readUserAction from "./read.user.action";
import { saveUserAction } from "./save.user.action";
import { User } from "./user.model";


const jsonFilePath = "./datos.json"; 


// Punto 1: Obtener pilotos por hobby
async function pilotoporHobby(req: Request, res: Response) {
  try {
    const { hobby } = req.query;

    if (!hobby) {
      return res.status(400).json({ message: "El parámetro de consulta 'hobby' es requerido" });
    }

    const users = await readUserAction();
    const filteredUsers = users.filter((user: User) => user.hobbies.includes(hobby as string));

    if (filteredUsers.length === 0) {
      return res.status(404).json({ message: `No se encontraron pilotos con el hobby: ${hobby}` });
    }

    // Devuelve solo los nombres de los pilotos que tienen el hobby
    const userNames = filteredUsers.map(user => user.name);
    res.status(200).json({
      message: `Users with hobby: ${hobby}`,
      users: userNames,
    });
  } catch (err) {
    res.status(500).json({ message: "Error al obtener pilotos por hobby" });
  }
}

//Punto 2:  retorne si el piloto con el id enviado existe.

// Verificar si el id del piloto existe
async function IdExiste(req: Request, res: Response): Promise<Response> {  
  try {
    const { id } = req.params;
    const users = await readUserAction();

    // Convierte el id a número ya que en datos.json los ids son numéricos
    const user = users.find((user: User) => user.id === Number(id));

    if (!user) {
      return res.status(404).json({ message: `El piloto con el id: ${id} no existe` });
    }

    return res.status(200).json({ message: `El piloto con el id: ${id} sí existe` });
  } catch (err) {
    return res.status(500).json({ message: "Error al buscar piloto por id" });
  }
}

//Punto 3 : retorne la experiencia total (años) del equipo de pilotos enviado.

async function ExperienciaTotal(req: Request, res: Response): Promise<Response> {
  try {
    const { team } = req.query;

    // Verificar si el parámetro team está presente
    if (!team) {
      return res.status(400).json({ message: "El parámetro 'team' es requerido" });
    }

    const users = await readUserAction();

    // Filtra los pilotos que pertenecen al equipo de pilotos
    const teamUsers = users.filter((user: User) => user.team === team);

    if (teamUsers.length === 0) {
      return res.status(404).json({ message: `No se encontraron pilotos en el equipo: ${team}` });
    }

    // Suma la experiencia de los pilotos en el equipo
    const totalExperience = teamUsers.reduce((acc, user) => acc + user.years, 0);
    
    return res.status(200).json({ message: `Experiencia total del equipo ${team}: ${totalExperience} años` });
  } catch (err) {
    return res.status(500).json({ message: "Error al buscar experiencia total del equipo" });
  }
}

// Punto 4 : retorne los pilotos de la facción enviada.

async function porFaccion(req:Request, res:Response): Promise<Response> {
  try {
    const { faction } = req.query;

    if (!faction) {
      return res.status(400).json({ message: "El parámetro 'faction' es requerido" });
    }

    const users = await readUserAction();
    const factionUsers = users.filter((user: User) => user.faction === faction);

    if (factionUsers.length === 0) {
      return res.status(404).json({ message: `No se encontraron pilotos en la facción: ${faction}` });
    }

    const userNames = factionUsers.map(user => user.name);
    return res.status(200).json({ message: `Pilotos en la facción ${faction}`, users: userNames });
  } catch (err) {
    return res.status(500).json({ message: "Error al buscar pilotos por facción" });
  }  
}

// Punto 5 : realice el registro de un usuario nuevo a la "base de datos". la base de datos es un archivo JSON llamado "datos.json".

// Función para registrar un nuevo usuario
async function registrarUsuario(req: Request, res: Response): Promise<Response> {
  try {
    const newUser: User = req.body;

    // Validar los campos necesarios
    if (!newUser.id || !newUser.name || !newUser.hobbies || !newUser.years || !newUser.team || !newUser.faction) {
      return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    // Leer los usuarios existentes
    const users = await readUserAction();

    // Verificar si el id ya existe
    const userExists = users.find((user: User) => user.id === newUser.id);
    if (userExists) {
      return res.status(400).json({ message: `El id: ${newUser.id} ya existe` });
    }

    // Guardar el nuevo usuario
    await saveUserAction(newUser);

    return res.status(201).json({ message: "Usuario registrado exitosamente", user: newUser });
  } catch (err) {
    return res.status(500).json({ message: "Error al registrar el usuario", error: (err as Error).message });
  }
}

// EXPORT CONTROLLER FUNCTIONS
export { pilotoporHobby };
export { ExperienciaTotal };
export { IdExiste };
export { porFaccion };
export { registrarUsuario };


