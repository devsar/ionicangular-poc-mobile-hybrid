import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab52Page } from './tab52.page';

describe('Tab52Page', () => {
  let component: Tab52Page;
  let fixture: ComponentFixture<Tab52Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab52Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab52Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
