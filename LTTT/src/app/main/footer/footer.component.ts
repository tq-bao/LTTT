import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppService } from './../../app.service';
import { CookieService } from './../../CookieService';
import { AlertService } from 'ngx-alerts';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ios = false
  ngOnInit() {
    if (localStorage.getItem('mobilecheck') == "ios") {
      this.ios = true;
    }
  }
  checklg() {
    this.alertService.danger("check")
    var data = this.appService.Login_Getinfor();
    this.alertService.danger("check 1")
    if (data !== "" && data !== undefined) {
      this.alertService.danger(data)
      let co: CookieService = new CookieService();
      co.setCookie('id', data.split(";")[0]);
      co.setCookie('name', data.split(";")[1]);
      this.router.navigate(['/thong-bao'])
    }
  }
  title = "";
  private previousUrl: string;
  private currentUrl: string;
  ladingcreate = 1;
  OfficerId = this.appService.GetIdFromLogin()
  footerhidden = 0;
  constructor(private appService: AppService, private router: Router, private alertService: AlertService) {
    this.currentUrl = this.router.url;
    if (this.currentUrl == "/") {
      this.footerhidden = 1;
    }
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;

        this.footerhidden = 0;
      };
    });
  }

}
