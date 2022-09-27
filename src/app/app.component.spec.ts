import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
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

  it(`should have as title 'AngularStructure'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularStructure');
  });

  it(`Debe mostrar un titulo 'APPMODULE!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const htmlContainer = fixture.nativeElement as HTMLElement;

    expect(htmlContainer.querySelector('#title')?.textContent).toEqual('APP MODULES!');
  });

  it(`Muestra alert hello`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;

    const spy = spyOn(component, 'hello');
    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  })
});

it(`Funcion regresa lo que deberia`, () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const component = fixture.componentInstance;

  const text = component.test();

  expect(text).toEqual('Text test');
})
