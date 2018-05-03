import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DlDateTimePickerDateModule,
    ClipboardModule,
  ],
  providers: [
    FormsModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
