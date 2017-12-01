import { TestBed, inject } from '@angular/core/testing';

import { TestsServices } from './tests.service';

describe('TestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestsServices]
    });
  });

  it('should be created', inject([TestsServices], (service: TestsServices) => {
    expect(service).toBeTruthy();
  }));
});
