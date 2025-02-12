import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  stdName: string = "Hamza Akram";
  isdisabled = false;
  propertyName = 'username';

  myalert() {
    alert('Alert from Click event binding');
  }

  mymouseover() {
    alert('Alert from Mouse Over event binding');
  }
  myStyle = '';
  mydiv() {
    this.myStyle = "height:200px;width:200px;background-color:red;color:white;border-radius:50px;justify-content:center;align-items:center;display:flex;"
  }




}
