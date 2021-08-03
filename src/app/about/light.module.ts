import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { LightRoutingModule } from '@app/about/light-routing.module';
import { LightComponent } from '@app/about/light.component';

@NgModule({
  imports: [CommonModule, TranslateModule, IonicModule, LightRoutingModule, FormsModule],
  declarations: [LightComponent],
})
export class LightModule {}
