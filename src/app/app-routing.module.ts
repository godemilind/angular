import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from './components/students/student/student.component';
import {TestComponent} from './components/test/test.component';

const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
