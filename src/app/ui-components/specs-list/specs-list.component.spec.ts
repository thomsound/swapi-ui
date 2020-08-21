import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsListComponent } from './specs-list.component';

describe('SpecsListComponent', () => {
  let component: SpecsListComponent;
  let fixture: ComponentFixture<SpecsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
