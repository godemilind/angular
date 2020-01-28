import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {StudentService} from '../../../services/student.service'
import {Student} from '../../../entity/student';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private employeeSer: StudentService) { }

  students:Student[]=[];
  student:Student=new Student();
  page:number=0;
  pageSize:number=2;
  sortBy:string='id';
  submitted = false;

  ngOnInit() {
    this.employeeSer.getAllEmployeesByPage(this.page,this.pageSize,this.sortBy).subscribe((data:Student[])=>{
      this.students = data;
      console.log(this.students);
    });
  }

  showData(event){
    console.log(event);
    let employees = this.employeeSer.getStudents();
    console.log(employees);
    employees.subscribe((data:Student[])=>{
        this.students = data;
        console.log(this.students);
    },errors=>console.log(errors));
  }

  getAllEmployeesByPage(page:number){
    if(page<0)
    this.page = 0
    else 
    this.page = page;
    this.employeeSer.getAllEmployeesByPage(this.page,this.pageSize,this.sortBy).subscribe((data:Student[])=>{
      this.students = data;
      console.log(this.students);
  });
  }

  addStudent(student){
    console.log(student);
    this.employeeSer.addStudent(student).subscribe((student:Student)=>{
      //this.students.push(student);
      this.student = new Student();
      console.log(this.students);
    });
  }

  getStudent(id:number){
    console.log(id);
    this.employeeSer.getStudent(id).subscribe((student:Student)=>{
      this.student = student;
    });
  }

  get diagnostic() { return JSON.stringify(this.student); }

  reset(){
    this.student = new Student();
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };

  onSubmit() { this.submitted = true; }

}
