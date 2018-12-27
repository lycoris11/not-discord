import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
