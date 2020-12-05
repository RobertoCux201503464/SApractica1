import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it('Debe de ser 4', () => {
    let prueba: AppComponent;
    prueba=new AppComponent();
    expect(prueba.sumar(2,2)).toEqual(4);
  });
});
