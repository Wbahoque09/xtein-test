import { Routes } from "@angular/router";
import { Layout } from './layout/layout';
import { Employees } from '../views/employees/employees';
import { EmployeesDetails } from '../views/employees-details/employees-details';
import { Products } from '../views/products/products';
import { Clients } from '../views/clients/clients';
import { InputValidatorsView } from '../views/input-validators-view/input-validators-view';
import { DataPublicViews } from '../views/data-public-views/data-public-views';
import { ComponentOne } from '../features/root-math/components/component-one/component-one';
import { ComponentSecond } from '../features/root-math/components/component-second/component-second';


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
        path: 'validations',
        component: InputValidatorsView
      },
      {
        path: 'data-public',
        component: DataPublicViews
      },
      {
        path: 'root-math',
        children: [
          {
            path: 'component-one',
            component: ComponentOne,
          },
          {
            path: 'component-two',
            component: ComponentSecond,
          },
          {
            path: '**',
            redirectTo: 'component-one',
            pathMatch: 'full',
          },
        ],
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
