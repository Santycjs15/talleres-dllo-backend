import { Request, Response } from "express";
import cors from "cors";
import express from "express";

// API ROUTES IMPORTS
import userRoutes from "./user/v1/user.routes";

// MIDDLEWARES
const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const SERVER_VERSION = "/api/v1/";

// Solo necesitamos definir las rutas una vez
app.use(SERVER_VERSION + "users", userRoutes);

// FALLBACKS
function routeNotFound(request: Request, response: Response) {
  response.status(404).json({
    message: "Route not found.",
  });
}

app.use(routeNotFound);

// START SERVER
app.listen(8080, () => {
  console.log("Server listening on port 8080.");
});
