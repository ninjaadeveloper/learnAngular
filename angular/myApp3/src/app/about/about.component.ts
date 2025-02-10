import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  bacthCode: string = "PR2-202311B";

  student1: string = "Hamza";
  student2: string = "Sami";

  studenList: string[] = ["Shehran", "Suleman", "Hamza", "Zaki", "Muddasir", "Sami", "Touqeer"]

}
