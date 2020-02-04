import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreCadastroPage } from './pre-cadastro.page';

describe('PreCadastroPage', () => {
  let component: PreCadastroPage;
  let fixture: ComponentFixture<PreCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreCadastroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
