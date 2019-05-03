import { Component, OnInit } from '@angular/core';
import { CookieService } from './../../CookieService';
import { AppService } from './../../app.service';
import { AlertService } from 'ngx-alerts';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-loginfromweb',
  templateUrl: './loginfromweb.component.html',
  styleUrls: ['./loginfromweb.component.css']
})
export class LoginfromwebComponent implements OnInit {
  Username = "";
  PassWord = "";
  constructor(private router: Router, private _router: ActivatedRoute, private appService: AppService, private alertService: AlertService) { }
  ngOnInit() {
    let code = this._router.snapshot.queryParams["mobile"];
    if (typeof code !== "undefined") {
      if (code == "ios") {
        localStorage.setItem('mobilecheck', "ios");
        this.alertService.danger('Vui lòng nhập chính xác tài khoản và mật khẩu.');
      }

    }
  }

  detectFace() {
    this.appService.DetectFace();
  }

  loadingmobile = 0;
  checkdem = 0;
  login() {
    var _this = this;
    this.checkdem = 0;
    if (this.Username == '' || this.Username === undefined) {
      this.checkdem = 1;
      this.alertService.danger('Vui lòng nhập Tên đăng nhập.');
    }
    if (this.PassWord == '' || this.PassWord === undefined) {
      this.checkdem = 1;
      this.alertService.danger('Vui lòng nhập Mật khẩu.');
    }
    if (this.Username == "admin" && this.PassWord == "123") {
      this.router.navigate(['/print-document']);
    } else {
      this.alertService.danger("Sai tên đăng nhập hoặc mật khẩu");
    }
  }
}