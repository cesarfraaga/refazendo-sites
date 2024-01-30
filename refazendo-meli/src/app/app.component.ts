import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RefazendoMeliComponent } from './refazendo-meli/refazendo-meli.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RefazendoMeliComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'first-project';

}
