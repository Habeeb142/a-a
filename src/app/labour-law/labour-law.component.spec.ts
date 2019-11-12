import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourLawComponent } from './labour-law.component';

describe('LabourLawComponent', () => {
  let component: LabourLawComponent;
  let fixture: ComponentFixture<LabourLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
