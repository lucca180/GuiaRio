import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacePagePage } from './place-page.page';

describe('PlacePagePage', () => {
  let component: PlacePagePage;
  let fixture: ComponentFixture<PlacePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
