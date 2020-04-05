import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(2,'pooja',10000,"JAVA"),
   new Employee(1,'priya',20000,"Angular"),
   new Employee(5,'mahima',50000,"SQL"),
   new Employee(4,'sameeksha',3000,"JAVA"),
   new Employee(3,'ayushi',90000,"Angular")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}