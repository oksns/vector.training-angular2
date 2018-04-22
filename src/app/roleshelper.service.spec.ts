import { TestBed, inject } from '@angular/core/testing';

import { RoleshelperService } from './roleshelper.service';

describe('RoleshelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleshelperService]
    });
  });

  it('should be created', inject([RoleshelperService], (service: RoleshelperService) => {
    expect(service).toBeTruthy();
  }));
});
