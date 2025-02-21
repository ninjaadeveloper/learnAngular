import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { StudentsService } from '../serivces/students.service';

@Component({
  selector: 'app-about',
  imports: [JsonPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
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

  message : any = "";

  constructor(private studentServices : StudentsService){
this.message = this.studentServices.getStudent();
  }

}
