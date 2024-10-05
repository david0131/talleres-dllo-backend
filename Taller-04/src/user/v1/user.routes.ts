import { Router, Request, Response } from "express";
import { readUsers, searchUsersWithThisHobby, existUser, teamExperience, usersByFaction, createUser} from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  const users = await readUsers();

  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

async function GetHobby(request: Request, response: Response) {
  var hobby = request.query.hobby as string;
  const userWithHobby = await searchUsersWithThisHobby(hobby);

  response.status(200).json({
    message: "Success.",
    users: userWithHobby,
  });
}

async function GetexistUser(request: Request, response: Response) {
  var idUser = request.query.id;
  // Verifica si idUser es string y conviértelo a número
  if (typeof idUser === "string") {
    const numericId = parseInt(idUser, 10);
    const existUserbool = await existUser(numericId);

    response.status(200).json({
      message: "Success.",
      exist: existUserbool,
    });
  }
}

async function GetTeam_experience(request: Request, response: Response) {
  var team = request.query.team as string;
  const SumTeamExperience = await teamExperience(team);

  response.status(200).json({
    message: "Success.",
    Total_Experience: SumTeamExperience,
  });
}

async function GetUsersByFaction(request: Request, response: Response) {
  var faction = request.query.faction as string;
  const usersByFactionResponse = await usersByFaction(faction);

  response.status(200).json({
    message: "Success.",
    users: usersByFactionResponse,
  });
}

async function PostUser(request: Request, response: Response) {
  const user = request.body;
  const responseMetodo = await createUser(user);

  response.status(200).json({
    message: "Success.",
    users: responseMetodo,
  });
}

// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
userRoutes.get("/hobby", GetHobby);
userRoutes.get("/exists", GetexistUser);
userRoutes.get("/team-experience", GetTeam_experience);
userRoutes.get("/by-faction", GetUsersByFaction);
userRoutes.post("/", PostUser);

// EXPORT ROUTES
export default userRoutes;
