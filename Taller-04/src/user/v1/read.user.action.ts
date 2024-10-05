import { UserType, users } from "./user.model";

// DECLARE ACTION FUNCTION
async function readUserAction(): Promise<UserType[]> {
  return users;
}

async function searchUsersWithThisHobbyAction(hobby: string): Promise<UserType[]> {
  return users.filter((user) => user.hobbies.includes(hobby));
}

async function existUserAction(idUser: number): Promise<boolean> {
  return users.some((user) => user.id === idUser);
}
async function teamExperienceAction(team: string): Promise<Number> {
  const totalExperience = users
    .filter((user) => user.team === team) // Filtra usuarios por equipo
    .reduce((sum, user) => sum + user.years, 0); // Suma los años de experiencia

  return totalExperience;
}
async function usersByFactionAction(faction: string): Promise<UserType[]> {
  return users.filter((user) => user.faction === faction); // Filtra los usuarios por facción
}
async function createUserAction(user: UserType): Promise<UserType> {
  const newId = user.id ? user.id : users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const newUser = { ...user, id: newId };
  users.push(newUser);

  return newUser;
}

// EXPORT ACTION FUNCTION
export { readUserAction, searchUsersWithThisHobbyAction, existUserAction, teamExperienceAction, usersByFactionAction, createUserAction };