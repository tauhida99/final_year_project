import { TestBed } from '@angular/core/testing';

import { NoInterceptor } from './no.interceptor';

describe('NoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NoInterceptor = TestBed.inject(NoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
