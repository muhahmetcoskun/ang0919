import { CommonModule } from '@angular/common';

import { PbtanimlamalarRoutingModule } from './pbtanimlamalar-routing.module';
import { PersonelPrimTanimlamaComponent } from './personel-prim-tanimlama/personel-prim-tanimlama.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, JwtInterceptor } from 'src/app/helpers';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { BrowserModule } from '@angular/platform-browser';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AktifpasifpipePipe } from 'src/app/pipes/aktifpasifpipe.pipe';
import { HelpMethod } from '../help/help';
import { TooltipModule } from 'primeng/tooltip';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  declarations: [PersonelPrimTanimlamaComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    PbtanimlamalarRoutingModule,
    TableModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule, CalendarModule,
    //BrowserModule,
    InputSwitchModule,
    ToggleButtonModule,
    TooltipModule,
    ProgressSpinnerModule



  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    , HelpMethod,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: []
})
export class PbtanimlamalarModule { }
