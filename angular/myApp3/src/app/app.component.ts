import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';

@Component({ //directives
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutComponent,HeaderComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learn Data binding';
}
