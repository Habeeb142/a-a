import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAddressComponent } from './navbar-address.component';

describe('NavbarAddressComponent', () => {
  let component: NavbarAddressComponent;
  let fixture: ComponentFixture<NavbarAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
