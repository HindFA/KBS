import { TestBed } from '@angular/core/testing';

import { Gard1Guard } from './guard.guard';

describe('GuardGuard', () => {
  let guard: Gard1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Gard1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
