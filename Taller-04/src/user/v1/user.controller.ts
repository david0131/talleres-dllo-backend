import { readUserAction, searchUsersWithThisHobbyAction, existUserAction,
          teamExperienceAction, usersByFactionAction, createUserAction } from "./read.user.action";
import { UserType } from "./user.model";

// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
  const users = await readUserAction();
  return users;
}

async function searchUsersWithThisHobby(hobby: string): Promise<UserType[]> {
  const users = await searchUsersWithThisHobbyAction(hobby);

  return users;
}

async function existUser(idUser: number): Promise<boolean> {
  return await existUserAction(idUser);
}

async function teamExperience(team: string): Promise<Number> {
  return await teamExperienceAction(team);
}

async function usersByFaction(faction: string): Promise<UserType[]> {
  return await usersByFactionAction(faction);
}

async function createUser(user: UserType): Promise<UserType> {
  return await createUserAction(user);
}

// EXPORT CONTROLLER FUNCTIONS
export { readUsers, searchUsersWithThisHobby, existUser, teamExperience, usersByFaction, createUser };
