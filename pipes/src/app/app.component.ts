import { Data } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  livro: any = {
    titulo: 'JavaScript ECMA Script 6',
    estrelas: 4.333,
    paginas: 310,
    preco: 34.904,
    dataLancamento: new Date(2016, 5, 23)
  }
}
