import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie{

  public qrCodes: Dexie.Table<any, number>; 

  constructor() { 
    super('DbService');
    this.version(1).stores({
      qrCodes: '++id, data' 
    });
    this.qrCodes = this.table('qrCodes');
  }
}
