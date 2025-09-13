



import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeService, Employee } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})

export class EmployeeListComponent implements OnInit{
  employees: Employee[] = [];

  constructor(private readonly employeeService:EmployeeService){}

  ngOnInit(): void{
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.employees = data;

    });
  }

  deleteEmployee(id :number){
    this.employeeService.deleteEmployee(id).subscribe(()=>{
      this.employees = this.employees.filter(emp => emp.id !== id);
      

    });
  }

}

