import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalLawComponent } from './criminal-law.component';

describe('CriminalLawComponent', () => {
  let component: CriminalLawComponent;
  let fixture: ComponentFixture<CriminalLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
