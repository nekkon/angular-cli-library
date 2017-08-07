import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultView } from './default.view';

describe('DefaultView', () => {
  let component: DefaultView;
  let fixture: ComponentFixture<DefaultView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
