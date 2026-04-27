import { Injectable } from '@angular/core';
import { Shared } from './shared';

@Injectable({
  providedIn: 'root',
})
export class Calc {

  constructor(public sharedService: Shared) {


  }


  add(a: number, b: number): number {

    this.sharedService.function1test();
    return a + b;
  }

  
  multiply(a: number, b: number): number {

    this.sharedService.function1test();
    return a * b;
  }
  
}
