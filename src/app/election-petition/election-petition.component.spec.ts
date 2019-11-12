import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionPetitionComponent } from './election-petition.component';

describe('ElectionPetitionComponent', () => {
  let component: ElectionPetitionComponent;
  let fixture: ComponentFixture<ElectionPetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionPetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionPetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
