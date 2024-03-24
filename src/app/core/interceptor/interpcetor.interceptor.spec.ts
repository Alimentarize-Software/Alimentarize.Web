import { TestBed } from '@angular/core/testing';

import { InterpcetorInterceptor } from './interpcetor.interceptor';

describe('InterpcetorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [InterpcetorInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: InterpcetorInterceptor = TestBed.inject(
      InterpcetorInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
