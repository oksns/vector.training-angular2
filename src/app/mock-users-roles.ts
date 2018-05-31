import {User} from "./login/authentication.service";


export const USERS_ROLES: User[] = [
  {
    login: 'admin',
    password: 'admin',
    roles: ['admin', 'superuser']
  },
  {
    login: 'user1',
    password: 'a23',
    roles: ['employee']
  },
  {
    login: 'teacher',
    password: 'tt',
    roles: ['teacher']
  }
];
