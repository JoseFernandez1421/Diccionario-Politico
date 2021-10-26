import { TestBed } from '@angular/core/testing';

import { PolitipediaService } from './politipedia.service';

describe('PolitipediaService', () => {
  let service: PolitipediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolitipediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
