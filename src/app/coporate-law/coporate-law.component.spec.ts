import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoporateLawComponent } from './coporate-law.component';

describe('CoporateLawComponent', () => {
  let component: CoporateLawComponent;
  let fixture: ComponentFixture<CoporateLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoporateLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoporateLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
