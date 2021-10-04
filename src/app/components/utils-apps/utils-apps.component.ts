import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utils-apps',
  templateUrl: './utils-apps.component.html',
  styleUrls: ['./utils-apps.component.css'],
})
export class UtilsAppsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  byteArray: any;
  convertDataURIToBinary(dataURI: any) {
    var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }

  upload(event: any, tipo: string) {
    const file = event.target.files[0];

    var me = this;
    const reader = new FileReader();

    // this.imagen = reader.readAsDataURL(file)
    // let byteArray;

    reader.addEventListener(
      'loadend',
      () => {
        if (tipo == 'BASE64') {
          this.byteArray = reader.result;
        } else if (tipo == 'BYTE') {
          this.byteArray = me.convertDataURIToBinary(reader.result);
        } else if (tipo == 'HEX') {
          this.byteArray = me.toHexString(me.convertDataURIToBinary(reader.result));
        }
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  toHexString(byteArray: Uint8Array): string {
    return Array.from(byteArray, function (byte) {
      return ('0' + (byte & 0xff).toString(16)).slice(-2);
    }).join('');
  }
}
