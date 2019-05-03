import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import { AlertService } from 'ngx-alerts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-print-document-test',
  templateUrl: './print-document-test.component.html',
  styleUrls: ['./print-document-test.component.css']
})
export class PrintDocumentComponent implements OnInit {
  OfficerId = this.appService.GetIdFromLogin();
  constructor(private router: Router, private appService: AppService, private alertService: AlertService, private datePipe: DatePipe) { }
  loadingmobile = 0;
  alertConfirm = false;

  
  loadAPI: Promise<any>;
  item: any = {};
  ngOnInit() {
    this.item.barcode = "LTTT-D15PM";
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  PrintHTMLDocument(){
    var html = document.getElementsByClassName("print-content")[0].innerHTML;
    this.appService.PrintHTMLDocument(html);
  }

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }
    if (!isFound) {
      var dynamicScripts = ["/assets/js/st-form.js"];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }
}
