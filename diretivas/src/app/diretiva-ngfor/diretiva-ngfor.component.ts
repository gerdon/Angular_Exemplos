import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DiretivaNgforComponent implements OnInit {

  cursos: string[] = ['Angular', 'CSS', 'HTML5', 'JAVA', 'C#'];
  constructor() { }

  ngOnInit() {
  }

}
