import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class TemperaturenService {
  constructor(private angularfireDatabase: AngularFireDatabase) {}

  getLatestTemp(): Observable<any> {
    return this.angularfireDatabase.list('/Temperaturen', ref => ref.orderByKey().limitToLast(1)).valueChanges()
  }
}
