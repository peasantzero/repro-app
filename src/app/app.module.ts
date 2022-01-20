import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AwsReproComponent } from './aws-repro/aws-repro.component';

@NgModule({
  declarations: [
    AppComponent,
    AwsReproComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
