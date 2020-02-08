import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuideCardComponent } from './guide-card.component';

describe('GuideCardComponent', () => {
  let component: GuideCardComponent;
  let fixture: ComponentFixture<GuideCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
