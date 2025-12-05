import { Routes } from "@angular/router";
import { Layout } from './layout/layout';
import { Employees } from '../views/employees/employees';
import { EmployeesDetails } from '../views/employees-details/employees-details';
import { Products } from '../views/products/products';
import { Clients } from "../views/clients/clients";


export const homeRoute: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'employees',
        children: [
          { path: '', component: Employees },
          { path: 'details/:id', component: EmployeesDetails },
          {
            path: '**',
            redirectTo: '',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'products',
        component: Products,
      },
      {
        path: 'clients',
        component: Clients,
      },
      {
        path: '**',
        redirectTo: 'employees',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
