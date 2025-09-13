import { Component, OnInit } from '@angular/core';
import{CommonModule} from '@angular/common';
import{ActivatedRoute, RouterModule, Router} from '@angular/router';
import { EmployeeService, Employee } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './employee-details.html',
  styleUrls: ['./employee-details.css']
})

export class EmployeeDetailsComponent implements OnInit{
  employee: Employee ={
    id:0,
    firstName: '',
    lastName: '',
    email: '' 
  };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly employeeService: EmployeeService  ,
  private readonly router: Router) {}

  // ngOnInit(): void{
  //   const id = this.route.snapshot.paramMap.get('id');
  //   if(id){
  //     this.employeeService.getEmployeesById(+id).subscribe((data)=>{
  //       this.employee = data ;
  //     });
  //   }
  // }

   ngOnInit(): void {
    // Use optional chaining as recommended by SonarLint
    const idParam = this.route.snapshot.paramMap.get('id');
    const employeeId = idParam ? Number(idParam) : null;
    
    if (employeeId) {
      this.employeeService.getEmployeesById(employeeId).subscribe({
        next: (data: Employee) => {
          this.employee = data;
        },
        error: (err: any) => {
          console.error('Error loading employee:', err);
          // Navigate back to list on error
          this.router.navigate(['/employees']);
        }
      });
    } else {
      // No valid ID provided, navigate back to list
      this.router.navigate(['/employees']);
    }
  }

 

updateEmployee(): void {
  if (this.employee && this.employee.id) {
    this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe({
      next: () => {
        console.log('Employee updated successfully');
        this.router.navigate(['/employees']);
      },
      error: (err: any) => {
        console.error('Error updating employee:', err);
      }
    });
  }
  };
  
   goBack(): void {
    this.router.navigate(['/employees']);
  }
}

    

