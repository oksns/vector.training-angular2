import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesSetterComponent } from './roles-setter.component';

describe('RolesSetterComponent', () => {
  let component: RolesSetterComponent;
  let fixture: ComponentFixture<RolesSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
