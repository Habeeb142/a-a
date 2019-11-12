import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstitutionalLawComponent } from './constitutional-law.component';

describe('ConstitutionalLawComponent', () => {
  let component: ConstitutionalLawComponent;
  let fixture: ComponentFixture<ConstitutionalLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstitutionalLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstitutionalLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
