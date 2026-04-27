import { TestBed } from '@angular/core/testing';
import { Calc } from './calc';
import { Shared } from './shared';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe.only('calculation', () => {

  let shared: Shared;
  let calc: Calc;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Calc, Shared],
    });

    shared = TestBed.inject(Shared);
    calc = TestBed.inject(Calc);
    spy = vi.spyOn(shared, 'function1test');
  });

  

  it('should add two numbers correctly', () => {
    const result = calc.add(2, 3);

    expect(result).toBe(5);
    expect(spy).toHaveBeenCalled();
  });

  it('should multiply two numbers correctly', () => {
    const result = calc.multiply(2, 3);

    expect(result).toBe(6);
    expect(spy).toHaveBeenCalled();
  });

});
