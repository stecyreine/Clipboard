import { QrService } from './../../services/qr.service';

import { Component,inject } from '@angular/core';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  
  qrs = inject(QrService);

  classe : string ="hide";
  
  qrcode : string | null = null;



  getQrcode(){
    console.log('getqr');
    this.qrs.generateQr().subscribe((response : Blob)=>{
      console.log('ingetqr');
      const url = URL.createObjectURL(response);
     this.qrcode = url;
   

    }, (error) => {
      console.error('Erreur lors de la génération du QR code', error);
    });
 }

 open(){
  this.classe="not";
  this.getQrcode();
 }
  
 
  
  close(){
    this.classe="hide";
  }
}
