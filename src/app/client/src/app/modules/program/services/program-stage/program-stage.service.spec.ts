import { TestBed } from '@angular/core/testing';

import { ProgramStageService } from './program-stage.service';

describe('ProgramStageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramStageService = TestBed.get(ProgramStageService);
    expect(service).toBeTruthy();
  });
});