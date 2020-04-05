import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employeeservice';
//@component is a decorator which identify the class below it as a component class 
@Component({
  selector: 'list-employees',
  templateUrl: './list-employees.component.html',//link of html file
  styleUrls: ['./list-employees.component.css']//link of css or style file
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[]=[];

  service:EmployeeService;

  orderByField:string=null;

  constructor(service:EmployeeService) {
  this.service=service;
  this.employees=this.service.fetchAllEmployees();
  }

  ngOnInit(): void {
  }
 
  orderBy(field:string){
    this.orderByField=field;     
  }

  
 
}
