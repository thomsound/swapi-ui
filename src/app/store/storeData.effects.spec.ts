import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { StoreDataEffects } from './storeData.effects';


describe('StoreDataEffects', () => {
  let actions$: Observable<any>;
  let effects: StoreDataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StoreDataEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StoreDataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
