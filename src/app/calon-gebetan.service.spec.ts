import { TestBed } from '@angular/core/testing';

import { CalonGebetanService } from './calon-gebetan.service';

describe('CalonGebetanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalonGebetanService = TestBed.get(CalonGebetanService);
    expect(service).toBeTruthy();
  });
});
