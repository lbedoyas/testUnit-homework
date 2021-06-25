import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTestComponent } from './services-test.component';

xdescribe('ServicesTestComponent', () => {
  let component: ServicesTestComponent;
  let fixture: ComponentFixture<ServicesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
