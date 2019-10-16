import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab51Page } from './tab51.page';

describe('Tab51Page', () => {
  let component: Tab51Page;
  let fixture: ComponentFixture<Tab51Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab51Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab51Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
