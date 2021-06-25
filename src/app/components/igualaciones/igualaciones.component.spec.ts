import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgualacionesComponent } from './igualaciones.component';

xdescribe('IgualacionesComponent', () => {
  let component: IgualacionesComponent;
  let fixture: ComponentFixture<IgualacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgualacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgualacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('el valor de mi variable debe ser Hola Mundo', () => {
    const valor = component.miVariable;
    expect(valor).toEqual('Hola Mundo');
  });

  it('la variable debe contener el valor Lucho', () => {
    const valorSaludo = component.saludo;
    expect(valorSaludo).toContain('Lucho');
  })

  it('debe retornar true', () => {
    const valorBoleano = component.numeroPar(44);
    expect(valorBoleano).toBeTruthy();
  });

  it('debe retornar false', () => {
    const valorBoleano = component.numeroPar(43);
    expect(valorBoleano).toBeFalsy();
  });




});
