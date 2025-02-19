import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { PKRDOLLARPipe } from './myPipe/pkr-dollar.pipe';
import { SQUAREPipe } from './myPipe/square.pipe';
import { ReversePipe } from './myPipe/reverse.pipe';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LowerCasePipe, UpperCasePipe, TitleCasePipe, SlicePipe,JsonPipe,PercentPipe,DecimalPipe,CurrencyPipe,DatePipe,PKRDOLLARPipe,SQUAREPipe,ReversePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp7';
  stdname: string = "Shehran khan";
  stdNumber = 0.2;
  stdMarks = 200;
  stdCurrency = 2000; 

  myDate = new Date();

  stdDetails = {
    name: "Mudassir",
    age: 19,
    gender: true
  }

}
