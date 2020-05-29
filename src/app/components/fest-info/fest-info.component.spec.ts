import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestInfoComponent } from './fest-info.component';

describe('FestInfoComponent', () => {
  let component: FestInfoComponent;
  let fixture: ComponentFixture<FestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
