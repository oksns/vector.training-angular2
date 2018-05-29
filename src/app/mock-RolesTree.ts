export const ROLES_TREE = [
  {
    name: 'superuser',
    parent: ''
  },
  {
    name: 'admin',
    parent: 'superuser'
  },
  {
    name: 'user',
    parent: 'superuser'
  },
  {
    name: 'teacher',
    parent: 'user'
  },
  {
    name: 'student',
    parent: 'user'
  },
  {
    name: 'employee',
    parent: 'user'
  }
];
