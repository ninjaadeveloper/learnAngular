import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor, NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor, NgStyle, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directives';


  myCondition = false;

  myCondition1 = false;

  fav_food = "Biryani";


  fav_dish: string[] = ["Biryani", "Qorma", "Daal Chawal", "Mutton Karahi", "Achar"];

  myStyle = {
    color: 'red',
    backgroundColor: 'black',
    'font-size': '12px',
    margin: '100px',
    padding: '100px',

  }


  studentDetails = [
    {name:'Mudassir',course:'ADSE'},
    {name:'Hamza',course:'HDSE'},
    {name:'Suleman',course:'ADSE'},
  ]

}
