import { Component, OnInit } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import { TemperaturenService } from '@app/home/temperaturen.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  temperatuur: any;
  isLoading = false;


  constructor(private temperaturenService: TemperaturenService) {}

  ngOnInit() {
    this.isLoading = true;
    this.temperaturenService.getLatestTemp()
      .pipe(
        tap(() => this.isLoading = false)
      )
      .subscribe((temp) => {
        if(temp[0]) {
          this.temperatuur = temp[0]
        }
      });
  }
}
