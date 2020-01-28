import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Student} from '../entity/student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:8080/employees';
  students:Student[] = null;

  getConfig() {
    return this.http.get(this.configUrl);
  }  

  private studentsUrl = 'http://localhost:8080/employees'; 
  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }

  getHeroes (): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  getStudents (): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  getStudent(id:number):Observable<Student>{
    return this.http.get<Student>(`http://localhost:8080/employees/${id}`);
  }

  addStudent(student:Student):Observable<Student>{
    return this.http.post<Student>("http://localhost:8080/employees",student);
  }

  getAllEmployeesByPage(page:number, pageSize:number, sortBy:string):Observable<Student[]>{
    return this.http.get<Student[]>(`http://localhost:8080/employees/${page}/${pageSize}/${sortBy}`);
    
  }

  // get getTestData(){
  //   this.http.get("http://jsonplaceholder.typicode.com/users").
  //   map((response) ⇒ response.json()).
  //   subscribe((data) ⇒ console.log(data))
  // }
}
