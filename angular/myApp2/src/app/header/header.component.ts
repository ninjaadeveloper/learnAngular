import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

//directive
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
