import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DataSource} from '@angular/cdk/collections';
import {CdkTableModule} from '@angular/cdk/table';
import { DataTablesModule } from 'angular-datatables';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {Ng2SmartTableModule, LocalDataSource} from 'ng2-smart-table';

import {AppRoutingModule, routableComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinationPathComponent } from './destination/destination.path';
import { CodeValuesComponent } from './codevalues/code-values';
import { KeyConfigurationComponent } from './key/key-configuration';

@NgModule({
  declarations: [
    AppComponent,
    DestinationPathComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    CommonModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
