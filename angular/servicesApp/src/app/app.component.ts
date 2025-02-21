import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { JsonPipe } from '@angular/common';
import { StudentsService } from './serivces/students.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AboutComponent,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  // students = [
  //   {
  //     name:"Ali",
  //     age:19,
  //     gender:true
  //   },
  //   {
  //     name:"Zubair",
  //     age:22,
  //     gender:true
  //   }, {
  //     name:"Farhana",
  //     age:25,
  //     gender:false
  //   }
  // ]

  message : any  = "";

  constructor(private studentService :StudentsService){
    this.message = this.studentService.getStudent();
  }

}
