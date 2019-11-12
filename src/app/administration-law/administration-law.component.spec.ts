import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationLawComponent } from './administration-law.component';

describe('AdministrationLawComponent', () => {
  let component: AdministrationLawComponent;
  let fixture: ComponentFixture<AdministrationLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
