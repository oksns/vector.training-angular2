import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractRolesComponentComponent } from './abstract-roles-component.component';

describe('AbstractRolesComponentComponent', () => {
  let component: AbstractRolesComponentComponent;
  let fixture: ComponentFixture<AbstractRolesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractRolesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractRolesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
