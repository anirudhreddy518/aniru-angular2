import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {Ng2SmartTableModule, LocalDataSource} from 'ng2-smart-table';

import { DestinationPathComponent } from './destination/destination.path';
import { CodeValuesComponent } from './codevalues/code-values';
import { KeyConfigurationComponent } from './key/key-configuration';


@Component({
    moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
