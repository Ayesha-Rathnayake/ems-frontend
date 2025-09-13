
import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list';
import { EmployeeFormComponent } from './components/employee-form/employee-form';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details';


export const routes: Routes = [
    {path: '', redirectTo: 'employees', pathMatch: 'full'},
    {path:'employees',component:EmployeeListComponent},
    {path:'add-employee',component:EmployeeFormComponent},
    {path:'edit-employee/:id',component:EmployeeFormComponent},
    {path:'employee/:id',component:EmployeeDetailsComponent}
];



