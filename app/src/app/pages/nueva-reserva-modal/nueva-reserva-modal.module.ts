import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaReservaModalPageRoutingModule } from './nueva-reserva-modal-routing.module';

import { NuevaReservaModalPage } from './nueva-reserva-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaReservaModalPageRoutingModule
  ],
  declarations: [NuevaReservaModalPage]
})
export class NuevaReservaModalPageModule {}
