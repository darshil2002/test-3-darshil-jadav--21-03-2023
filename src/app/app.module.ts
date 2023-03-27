import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import {FormsModule,FormControl} from '@angular/forms'
import { Validators } from '@angular/forms';
import { MyFormComponent } from './my-form/my-form.component';
import {HttpClient,HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { myint } from '../myint';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule, PagerModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: myint,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
