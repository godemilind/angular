import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import{Student} from '../../entity/student';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  students: Student[];
  constructor(private service:StudentService) { }

  ngOnInit() {
  }

  logData(){
    this.service.getHeroes().subscribe((s)=>{
      this.students = s;
      console.log(s);
      console.log(this.students);
    });
  }
}
