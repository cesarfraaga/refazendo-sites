import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-refazendo-meli',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './refazendo-meli.component.html',
  styleUrl: './refazendo-meli.component.css'
})
export class RefazendoMeliComponent {
  
  user = GlobalConstants.user;
  dataNascimento = GlobalConstants.dataNascimento;
  logado = GlobalConstants.logado;
  enderecoUser = GlobalConstants.enderecoUser;
  meliMais = GlobalConstants.meliMais;

}
