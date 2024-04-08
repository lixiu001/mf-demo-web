import { TestBed } from '@angular/core/testing';

import { AgtDynamicFrameworkService } from './agt-dynamic-framework.service';

describe('AgtDynamicFrameworkService', () => {
  let service: AgtDynamicFrameworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgtDynamicFrameworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
