import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-igualaciones',
  templateUrl: './igualaciones.component.html',
  styleUrls: ['./igualaciones.component.scss']
})
export class IgualacionesComponent implements OnInit {

  miVariable: string = 'Hola Mundo';
  saludo: string = 'Buenos Dias Lucho';
  window: any;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
  }

  ngOnInit(): void {
    this.check();
  }

  check() {
    console.log(this.document);
    console.log(this.window);
  }

  numeroPar(numero: number): boolean{
    return numero % 2 === 0 ? true : false;
  }

}
