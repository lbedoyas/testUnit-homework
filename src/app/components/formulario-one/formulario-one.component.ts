import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-one',
  templateUrl: './formulario-one.component.html',
  styleUrls: ['./formulario-one.component.scss']
})
export class FormularioOneComponent implements OnInit {

  formulario: FormGroup | any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

}
