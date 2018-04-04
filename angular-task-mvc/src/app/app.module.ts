import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from './toaster.service';


/* import { FormRoutingModule } from './form-routing.module'; */
/* import { FormComponent } from './form.component'; */



@NgModule({
imports: [ BrowserModule, HttpModule,AlertModule.forRoot(), NgbModule.forRoot(),FormsModule,ReactiveFormsModule],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ],
providers: [ AppService , ToasterService],
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
