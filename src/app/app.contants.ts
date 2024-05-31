const apiURL = 'http://localhost:3000/api/admin';

export const API_URL = {
  LOGIN: `${apiURL}/login`,
  GET_ALL_EMPLOYEES: `${apiURL}/employee/allEmployees`,
  ADD_EMPLOYEE: `${apiURL}/employee/create`,
  UPDATE_EMPLOYEE: `${apiURL}/employee/update`,
};

export const NAV_LIST = [
  {
    route: 'employee-list',
    title: 'Employee List',
  },
  {
    route: 'add',
    title: 'Add New Employee',
  },
  {
    route: 'update',
    title: 'Update Employee',
  },
  {
    route: 'delete',
    title: 'Delete Employee',
  },
];
