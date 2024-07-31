import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees',
  standalone: true,
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class EmployeesComponent implements OnInit {
  employeesList: Employee[] = [];
  newEmployee: Employee = new Employee();
  editEmployee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.employeeService.getAllEmployees().subscribe(
      (response) => {
        this.employeesList = response;
        console.log('Employees List:', this.employeesList);
        this.cdr.detectChanges(); // Trigger change detection
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  saveClick(): void {
    console.log('New Employee:', this.newEmployee); // Debugging line
  
    if (this.newEmployee.name.trim() === '') {
      alert('Name is empty');
      return;
    }
    if (this.newEmployee.address.trim() === '') {
      alert('Address is empty');
      return;
    }
    if (this.newEmployee.salary <= 0) {
      alert('Salary must be greater than 0');
      return;
    }
    if (this.newEmployee.email.trim() === '') {
      alert('Email is empty');
      return;
    }
    if (this.newEmployee.phone.trim() === '') {
      alert('Phone number is empty');
      return;
    }
    if (this.newEmployee.designation.trim() === '') {
      alert('Designation is empty');
      return;
    }
  
    // Create a copy of the employee object without the `id`
    const employeeData = {
      name: this.newEmployee.name,
      address: this.newEmployee.address,
      email: this.newEmployee.email,
      phone: this.newEmployee.phone,
      salary: this.newEmployee.salary,
      designation: this.newEmployee.designation
    };
  
    this.employeeService.saveEmployee(employeeData).subscribe(
      (response) => {
        alert('Data saved');
        this.getAll(); // Refresh the employee list
        this.newEmployee = new Employee(); // Clear the form
      },
      (error) => {
        console.error('Error occurred while saving data:', error);
        alert('Failed to save data. Check the console for more details.');
      }
    );
  }

  editClick(index: number): void {
    this.editEmployee = { ...this.employeesList[index] };
  }

 updateClick(): void {
    if (this.editEmployee.name.trim() === '') {
      alert('Name is empty');
      return;
    }
    if (this.editEmployee.address.trim() === '') {
      alert('Address is empty');
      return;
    }
    if (this.editEmployee.salary <= 0) {
      alert('Salary must be greater than 0');
      return;
    }
    if (this.editEmployee.email.trim() === '') {
      alert('Email is empty');
      return;
    }
    if (this.editEmployee.phone.trim() === '') {
      alert('Phone number is empty');
      return;
    }
    if (this.editEmployee.designation.trim() === '') {
      alert('Designation is empty');
      return;
    }
    this.employeeService.updateEmployee(this.editEmployee).subscribe(
      (response) => {
        alert('Data updated');
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteClick(index: number): void {
    const id = this.employeesList[index]?.id;
    if (id) {
      const ans = confirm('Do you want to delete this data?');
      if (ans) {
        this.employeeService.deleteEmployee(id).subscribe(
          (response) => {
            alert('Data deleted');
            this.getAll(); // Refresh the employee list
          },
          (error) => {
            console.error('Error occurred while deleting data:', error);
          }
        );
      }
    } else {
      console.error('Employee ID is not defined');
    }
  }
}
