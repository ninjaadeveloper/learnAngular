import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from './services/post.service';
import { JsonPipe, NgFor } from '@angular/common';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,JsonPipe,NgFor,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myData : any;

  constructor(private post:PostService) { }

  ngOnInit(){
    this.post.getPosts().subscribe((mypost)=>{
      return this.myData = mypost;
    })
  }



}
