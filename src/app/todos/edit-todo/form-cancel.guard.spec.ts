import { TestBed, async, inject } from '@angular/core/testing';

import { FormCancelGuard } from './form-cancel.guard';

describe('FormCancelGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormCancelGuard]
    });
  });

  it('should ...', inject([FormCancelGuard], (guard: FormCancelGuard) => {
    expect(guard).toBeTruthy();
  }));
});
