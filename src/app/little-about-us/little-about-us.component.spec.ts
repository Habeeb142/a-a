import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleAboutUsComponent } from './little-about-us.component';

describe('LittleAboutUsComponent', () => {
  let component: LittleAboutUsComponent;
  let fixture: ComponentFixture<LittleAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
