import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import {  Router,NavigationEnd } from '@angular/router';
import { CookieService } from './../../CookieService';
import { AlertService } from 'ngx-alerts';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  OfficerId = this.appService.GetIdFromLogin(); 
  ios = false
  constructor(private appService: AppService,private router: Router, private alertService: AlertService) { 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {   
        var currentUrl = event.url;
        if(currentUrl != "/loginweb")
          if (!(this.OfficerId == "" || this.OfficerId == null))
          {
            //this.MB_SystemNotification();
          }
          else
          {
            
            this.OfficerId = this.appService.GetIdFromLogin(); 
            if (!(this.OfficerId == "" || this.OfficerId == null))
            {
              //this.MB_SystemNotification();
            }
          }
      };
    })
  }
  ngOnInit() {
    if(localStorage.getItem('mobilecheck')=="ios"){
      this.ios = true;
    }
  }
  datatotal = 0
  MB_SystemNotification(){
    this.datatotal = 0
    var _thisa = this;
    let body = "OfficerId=" + this.OfficerId;
    this.appService.MB_SystemNotification(body, this).then(function (obj) {
      _thisa.datatotal = 0
      let json = obj.response.json();
      if(json.res.length > 0)
      {
        _thisa.datatotal = json.res.length
      }
    }).catch(function (err) {
    });
  }
}
