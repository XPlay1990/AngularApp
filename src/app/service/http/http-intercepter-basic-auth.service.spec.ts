import { TestBed } from '@angular/core/testing';

import { HttpIntercepterAddJWTHeader } from './http-intercepter-basic-auth.service';

describe('HttpIntercepterBasicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntercepterAddJWTHeader = TestBed.get(HttpIntercepterAddJWTHeader);
    expect(service).toBeTruthy();
  });
});
