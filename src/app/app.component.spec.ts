import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

let nuevo: AppComponent;
describe('AppComponent', () => {
  beforeEach(async () => {
    nuevo=new AppComponent();
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'practica1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('practica1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('practica1 app is running!');
  });

  it("DEBE SER 4",()=>{
    expect(nuevo.suma(2,2)).toEqual(5);
  }
  );


});
