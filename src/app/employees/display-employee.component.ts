import { Component, OnInit, Input } from '@angular/core'; //OnChanges , Output, EventEmitter
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit  { //OnChanges
  
  @Input() employee: Employee;
  //@Output() notify: EventEmitter<string> = new EventEmitter<string>();
  //@Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  

  constructor() { }

  ngOnInit() {
  } 

  getEmployeeNameAndGender(): string{
    return this.employee.name + ' '+ this.employee.gender;
  }

  /* handleClick(){
    //this.notify.emit(this.employee.name);
    this.notify.emit(this.employee);
    
  } */


//Output property is used to pass data from a child to parent Component
}
