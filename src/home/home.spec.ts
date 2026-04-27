import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';

describe.only('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  let el:any

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    el=fixture.debugElement;  
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should have correct contents', () => {

    const h1 = fixture.nativeElement.querySelector('p');
    const h2 = fixture.nativeElement.querySelector('h1');
    const div = fixture.nativeElement.querySelector('div');
    const button:any = fixture.nativeElement.querySelector('button.btn');
    expect(h1.textContent.trim()).toBe('salman khan');
        expect(h2.textContent.trim()).toBe('another test');
        expect(div.textContent.trim()).toBe('hello');
        expect(button.disabled).toBe(true);
  });





});
