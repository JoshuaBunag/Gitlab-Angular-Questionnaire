import { TestBed } from '@angular/core/testing';

import { KnotTransformationService } from './knot-transformation.service';

describe('KnotTransformationService', () => {
  let service: KnotTransformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnotTransformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
