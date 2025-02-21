import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() {}
  getStudent(){
    // return 'Hello World from Services from 11B';

    return  [
    {
      name:"Ali",
      age:19,
      gender:true
    },
    {
      name:"Zubair",
      age:22,
      gender:true
    }, {
      name:"Farhana",
      age:25,
      gender:false
    }, {
      name:"Yawar",
      age:21,
      gender:true
    }
  ]
      
  }
}
