import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { LightService } from '@app/about/light.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
})
export class LightComponent implements OnInit {
  light: boolean;

  constructor(private readonly lightService: LightService,
              private readonly loadingController: LoadingController,) {}

  ngOnInit() {
    this.lightService.getLightSetting()
      .subscribe(l => this.light = l)
  }

  saveLight() {
    this.loadingController.create();
    this.lightService.setLightSetting(this.light).then(() => {
      this.loadingController.dismiss();
    })
  }
}
