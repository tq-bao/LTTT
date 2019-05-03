import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//khởi tạo
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from './main/header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AlertModule } from 'ngx-alerts';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ImageUploadModule } from "angular2-image-upload";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginfromwebComponent } from './main/loginfromweb/loginfromweb.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { FooterComponent } from './main/footer/footer.component';
import { PrintDocumentComponent } from './main/print-document-test/print-document-test.component';
//End xóa'
import { NgxBarcodeModule } from 'ngx-barcode';
const routes: Routes = [

];
@NgModule({
  declarations: [
    LoginfromwebComponent,
    PrintDocumentComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [NgxBarcodeModule, SignaturePadModule, ImageUploadModule.forRoot(), AngularMultiSelectModule, Ng2SearchPipeModule,
    NgSelectModule, RouterModule.forRoot(routes), BrowserModule, AppRoutingModule, HttpClientModule, HttpModule, FormsModule, CurrencyMaskModule
    , AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }), BrowserAnimationsModule
  ],
  providers: [AppService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
