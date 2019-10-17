import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEditarperfilComponent } from './top-editarperfil.component';

describe('TopEditarperfilComponent', () => {
  let component: TopEditarperfilComponent;
  let fixture: ComponentFixture<TopEditarperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopEditarperfilComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopEditarperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
