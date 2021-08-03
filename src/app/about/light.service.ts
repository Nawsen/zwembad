import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class LightService {
  constructor(private angularfireDatabase: AngularFireDatabase) {}

  getLightSetting(): Observable<any> {
    return this.angularfireDatabase.object('/settings/light',).valueChanges()
  }

  setLightSetting(data: boolean): Promise<any> {
    return this.angularfireDatabase.object('/settings/light').set(data);
  }
}
