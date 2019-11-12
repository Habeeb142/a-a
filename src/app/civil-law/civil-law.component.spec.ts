import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilLawComponent } from './civil-law.component';

describe('CivilLawComponent', () => {
  let component: CivilLawComponent;
  let fixture: ComponentFixture<CivilLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
