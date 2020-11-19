import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevaReservaModalPage } from './nueva-reserva-modal.page';

describe('NuevaReservaModalPage', () => {
  let component: NuevaReservaModalPage;
  let fixture: ComponentFixture<NuevaReservaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaReservaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaReservaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
