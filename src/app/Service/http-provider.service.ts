import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  getAllEmployees():Observable<any>
  {
    return this.httpClient.get<any>("https://localhost:44378/api/employee");
  }
  saveEmployee(newEmployee:Employee):Observable<Employee>
  {
    return this.httpClient.post<Employee>("https://localhost:44378/api/employee",newEmployee);
  }
  
  deleteEmployee(id:Number):Observable<any>
  {
    return this.httpClient.delete<any>("https://localhost:44378/api/employee/" +id);
  }
  updateEmployee(editEmployee:Employee):Observable<Employee>
  {
    return this.httpClient.put<Employee>("https://localhost:44378/api/employee" ,editEmployee);
  }
  
}
