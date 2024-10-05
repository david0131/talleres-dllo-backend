type UserType = {
  id: number;
  name: string;
  hobbies: string[];
  years: number;
  team: string;
  faction: string;
};

import users from '../taller-04-datos.json';

// EXPORT ALL
export { UserType, users };