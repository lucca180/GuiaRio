import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreLoginPage } from './pre-login.page';

describe('PreLoginPage', () => {
  let component: PreLoginPage;
  let fixture: ComponentFixture<PreLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
