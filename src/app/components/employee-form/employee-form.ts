import{Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms';
import{Router, ActivatedRoute} from '@angular/router';
import {EmployeeService, Employee} from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-form.html',
  styleUrls: ['./employee-form.css']
})

export class EmployeeFormComponent implements OnInit {
  employee:Employee = {
    firstName: '',
    lastName: '',
    email: ''};
  isEdit :boolean= false ;
  employeeId!:number;

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id  = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isEdit = true;
      this.employeeId= +id;
      this.employeeService.getEmployeesById(this.employeeId).subscribe({
        next: (data) => { this.employee = data; },

        error: (err) => console.error('Failed to load employee', err)
      });
    }
  }

  onsubmit() {
    if (this.isEdit) {
      this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe({
        next: () => this.router.navigate(['/employees']),
        error: (err) => console.error('Error updating employee', err)
      });
    } else {
      this.employeeService.createEmployee(this.employee).subscribe({
        next: () => this.router.navigate(['/employees']),
        error: (err) => console.error('Error creating employee', err)
      });
  }
}

onCancel(): void{
  this.router.navigate(['/employees']);
}
}



