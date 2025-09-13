import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Employee{
  id?: number;
  firstName: string;
  lastName: string;
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly apiURL = 'http://localhost:8080/api/employees';//springboot backend url

  constructor(private readonly http: HttpClient){}

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiURL);
  }

  getEmployeesById(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.apiURL}/${id}`);
  }

  createEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiURL,employee);
  }

  updateEmployee(id:number,employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiURL}/${id}`,employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`, { responseType: 'text' as 'json' });
  }

}
