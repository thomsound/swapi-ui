import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlingContentBoxComponent } from './crawling-content-box.component';

describe('CrawlingContentBoxComponent', () => {
  let component: CrawlingContentBoxComponent;
  let fixture: ComponentFixture<CrawlingContentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlingContentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlingContentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
