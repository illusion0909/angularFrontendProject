import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl = "https://localhost:44330/api/employee";
  getAllEmployees():Observable<any>
  {
    return this.httpClient.get<any>(this.baseUrl);
  }


  //constructor(private httpClient: HttpClient) { }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseUrl, employee);
  }
  deleteEmployee(id: string): Observable<any> {
  return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
}

updateEmployee(editEmployee: Employee): Observable<Employee> {
  if (!editEmployee.id) {
    throw new Error('Employee ID is required for update.');
  }
  const url = `${this.baseUrl}/${editEmployee.id}`; // URL should include the ID
  return this.httpClient.put<Employee>(url, editEmployee);
}

  

  
}
