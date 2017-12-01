import { TestBed, inject } from '@angular/core/testing';

import { GraduatesService } from './graduates.service';

describe('GraduatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraduatesService]
    });
  });

  it('should be created', inject([GraduatesService], (service: GraduatesService) => {
    expect(service).toBeTruthy();
  }));
});
