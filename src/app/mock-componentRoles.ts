export const COMPONENT_ROLES = {
  ChartsComponentComponent: ['admin'],
  RangeComponentComponent: ['admin', 'user', 'employee'],
  MessagesComponentComponent: ['user', 'employee'],
  CalendarComponentComponent: ['admin'],
  CoursesComponent: ['user', 'teacher', 'employee'],
  MaterialsComponent: ['admin', 'teacher'],
  NavBarHome: ['user', 'teacher', 'employee'],
  NavBarQuestions: ['user', 'teacher', 'employee'],
  NavBarRoles: [ 'user', 'teacher', 'employee'],
  NavBarCourses: ['user', 'teacher', 'employee'],
  NavBarDepartments: ['user', 'teacher', 'employee'],
  NavBarMaterials: ['user', 'teacher', 'employee'],
  NavBarAdminTool: ['admin', 'superuser']
};
