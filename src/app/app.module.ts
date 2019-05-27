import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExcelComponent } from './components/excel/excel.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { UnimatrizComponent } from './components/unimatriz/unimatriz.component';
import { InputVisualComponent } from './components/input-visual/input-visual.component';
import { EcuacionesComponent } from './components/ecuaciones/ecuaciones.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExcelComponent,
    ResultadoComponent,
    UnimatrizComponent,
    InputVisualComponent,
    EcuacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
