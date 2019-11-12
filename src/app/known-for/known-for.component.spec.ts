import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownForComponent } from './known-for.component';

describe('KnownForComponent', () => {
  let component: KnownForComponent;
  let fixture: ComponentFixture<KnownForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnownForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnownForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
