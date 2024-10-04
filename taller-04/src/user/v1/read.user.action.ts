import { User } from "./user.model";
import { promises as fs } from "fs";
import path from "path";

// DECLARE THE PATH TO JSON FILE
const jsonfile = "../../../datos.json";

// DECLARE ACTION FUNCTION
async function readUserAction(): Promise<User[]> {
  try {
    const filePath = path.resolve(__dirname, jsonfile); 
    const data = await fs.readFile(filePath, "utf-8"); 
    const users: User[] = JSON.parse(data); 
    return users;
  } catch (error) {
    throw new Error("No pudo leerse el archivo."); 
  }
}

// EXPORT ACTION FUNCTION
export default readUserAction;


