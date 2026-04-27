import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pro');

  btnText:string='subscribe'

  isSubscribed:boolean=false


  susbscibe(){
    
    this.isSubscribed=true
    this.btnText='subscribed'
  }

  
  isOn = false;
  message = '';

  toggleLight() {
    if (this.isOn) {
      this.message = 'Light OFF';
      this.isOn = false;
    } else {
      this.message = 'Light ON';
      this.isOn = true;
    }
  }



}
