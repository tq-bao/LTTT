import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginfromwebComponent } from './main/loginfromweb/loginfromweb.component';
import { PrintDocumentComponent } from './main/print-document-test/print-document-test.component';

const routes: Routes = [
  { path: 'print-document', component: PrintDocumentComponent },
  { path: 'loginweb', component: LoginfromwebComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
