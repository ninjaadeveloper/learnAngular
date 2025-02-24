import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [JsonPipe,NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  myUsers: any;


  constructor(private user: UserService) {
    this.user.getUsers().subscribe((response)=>{
      return this.myUsers = response;
    });
  }

}
