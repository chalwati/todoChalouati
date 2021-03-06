import { TestBed } from '@angular/core/testing';

import { ManagementTasksService } from './management-tasks.service';

describe('ManagementTasksService', () => {
  let service: ManagementTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
