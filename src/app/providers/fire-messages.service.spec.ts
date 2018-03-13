import { TestBed, inject } from '@angular/core/testing';

import { FireMessagesService } from './fire-messages.service';

describe('FireMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireMessagesService]
    });
  });

  it('should be created', inject([FireMessagesService], (service: FireMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
