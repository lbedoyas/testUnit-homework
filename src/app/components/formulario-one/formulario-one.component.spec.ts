import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormularioOneComponent } from './formulario-one.component';
import { AppModule } from 'src/app/app.module';

describe('FormularioOneComponent', () => {
  // let component: FormularioOneComponent;
  // let fixture: ComponentFixture<FormularioOneComponent>;
  let componente: FormularioOneComponent;

  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    //fixture = TestBed.createComponent(FormularioOneComponent);
    //component = fixture.componentInstance;
    componente = new FormularioOneComponent(formBuilder);

    // pass in the form dynamically
        componente.formulario = formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

    //fixture.detectChanges();
  });

  it('should create', () => {
    //console.log(componente);
    expect(componente).toBeTruthy();
  });

  it('should have two fields empty', () => {
    expect(componente.formulario.value.email).toBe('');
    expect(componente.formulario.value.password).toBe('');
  });

  it('the form should have a valid status', () => {
    //console.log(componente.formulario);
    expect(componente.formulario.status).toBe('INVALID')
  });

  it('the email should be required', () => {
    const control = componente.formulario.get('email');
    control.setValue('123');
    expect(control.status).toBe('INVALID');
    expect(control.valid).toBeFalsy();
  });

  it('the email should to valid', () => {
    const control = componente.formulario.get('email');
    control.setValue('luis@luis.com');
    expect(control.valid).toBeTruthy();
  });





});
