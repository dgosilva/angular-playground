import { TestBed } from '@angular/core/testing';

import { FeatureNavigationService } from './feature-navigation.service';

describe('FeatureNavigationService', () => {
  let service: FeatureNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
