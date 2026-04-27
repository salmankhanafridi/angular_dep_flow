import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe.only('App', () => {

  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

        component = TestBed.createComponent(App).componentInstance;

  });

  it.skip('after clicked btn functionality', async () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    component.isSubscribed = false;
    component.btnText = 'subscribe';
    fixture.detectChanges();

    let btn: HTMLButtonElement =
      fixture.nativeElement.querySelector('button.btn');

    btn.click();

    await new Promise(resolve => setTimeout(resolve, 3000));
    fixture.detectChanges();

    btn = fixture.nativeElement.querySelector('button.btn');

    expect(btn.textContent?.trim()).toBe('subscribed');
    expect(btn.disabled).toBe(true);
  });

   it.only('should turn ON the light when it is OFF', () => {
    component.isOn = false;

    component.toggleLight();

    expect(component.isOn).toBe(true);
    expect(component.message).toBe('Light ON');
  });

  it.only('should turn OFF the light when it is ON', () => {
    component.isOn = true;

    component.toggleLight();

    expect(component.isOn).toBe(false);
    expect(component.message).toBe('Light OFF');
  });

});
