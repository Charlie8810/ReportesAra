/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PulsoDiarioService } from './pulso-diario.service';

describe('PulsoDiarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PulsoDiarioService]
    });
  });

  it('should ...', inject([PulsoDiarioService], (service: PulsoDiarioService) => {
    expect(service).toBeTruthy();
  }));
});
