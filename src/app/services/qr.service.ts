import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from './db.service';



@Injectable({
  providedIn: 'root'
})
export class QrService {

  format : string = "png";
  data : string = "https://api-ninjas.com";

  
  constructor(private http : HttpClient, private db: DbService) {
    this.db= new DbService();
   }

   generateQr(): Observable<Blob>{
  
  return this.http .get<Blob>('https://api.api-ninjas.com/v1/qrcode?format=' + this.format + '&data=' + this.data , {responseType :'blob' as 'json'});

}


saveQrCode(data: string) {
  return this.db.qrCodes.add({ data });
}

   
}
