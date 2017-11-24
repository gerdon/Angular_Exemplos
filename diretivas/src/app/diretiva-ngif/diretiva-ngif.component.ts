import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ['Angular 5', 'CSS', 'HTML5'];
  mostrarCursos = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
}
