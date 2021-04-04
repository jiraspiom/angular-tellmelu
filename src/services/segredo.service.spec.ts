/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SegredoService } from './segredo.service';

describe('Service: Segredo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SegredoService]
    });
  });

  it('should ...', inject([SegredoService], (service: SegredoService) => {
    expect(service).toBeTruthy();
  }));
});
