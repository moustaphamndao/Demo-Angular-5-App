import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {

    private listEmployees: Employee[] = [
        {
          id: 1,
          name: 'Bamba',
          gender: 'Male',
          email: 'bamba@bamba.com',
          contactPreference: 'Email',
          dateOfBirth: new Date('10/25/1988'),
          department: '3',
          isActive: true,
          photoPath: 'assets/images/bamba.jpg'   
        },
        {
          id: 2,
          name: 'Diarra',
          gender: 'Female',
          email: 'diarra@diarra.com',
          phoneNumber: 123456789,
          contactPreference: 'Phone',
          dateOfBirth: new Date('11/20/1968'),
          department: '2',
          isActive: true,
          photoPath: 'assets/images/diarra.jpg'
    
        },
        {
          id: 3,
          name: 'Ibra',
          gender: 'Male',
          phoneNumber: 123456789,
          contactPreference: 'Phone',
          dateOfBirth: new Date('03/12/1989'),
          department: '3',
          isActive: true,
          photoPath: 'assets/images/ibra.jpg'
        }
    ];

    getEmployees(): Employee[]
    {
        return this.listEmployees;
    }

    save(newEmployee: Employee):void{
        this.listEmployees.push(newEmployee);
    }
}