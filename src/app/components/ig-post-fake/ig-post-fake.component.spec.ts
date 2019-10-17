import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgPostFakeComponent } from './ig-post-fake.component';

describe('IgPostFakeComponent', () => {
  let component: IgPostFakeComponent;
  let fixture: ComponentFixture<IgPostFakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgPostFakeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgPostFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
