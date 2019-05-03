import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import * as Cookies from 'es-cookie';
import * as CryptoJS from 'crypto-js';
declare var $: any;
@Injectable()
export class CookieService {
  constructor() { }
   getCookie(name: string) {
    try {
     var dt=Cookies.get(name).toString();
      return this.f_decrypt(dt);
     } catch(e){
        return null;
      }
  }
   deleteCookie(name)  {
    Cookies.remove(name);
  }

   setCookie(name: string, value: string)  {
    
    Cookies.set(name, this.f_encrypt(value.toString()))
  }
  f_encrypt(str:string){
    return  CryptoJS.AES.encrypt(str, "netco@123",
    {
        keySize: 128 / 8,
        iv: "netco@123",
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
  }
  f_decrypt(str:string){
      var decrypted = CryptoJS.AES.decrypt(str, "netco@123", {
        keySize: 128 / 8,
        iv: "netco@123",
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return  decrypted.toString(CryptoJS.enc.Utf8);
  }

}