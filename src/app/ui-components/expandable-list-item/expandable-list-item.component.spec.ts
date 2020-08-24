import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableListItemComponent } from './expandable-list-item.component';

describe('ExpandableListItemComponent', () => {
  let component: ExpandableListItemComponent;
  let fixture: ComponentFixture<ExpandableListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
