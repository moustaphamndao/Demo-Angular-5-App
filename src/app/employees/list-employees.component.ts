import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  //selector: 'app-list-employees', we dont need it we are using the routing 
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  //datafromChild: string;
  //datafromChild: Employee;

  constructor(private _employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  //handleNotify(eventData: string) {
  // handleNotify(eventData: Employee) {
  //   this.datafromChild = eventData;
  // }

}
