import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DestinationPathComponent } from './destination/destination.path';
import { CodeValuesComponent } from './codevalues/code-values';
import { KeyConfigurationComponent } from './key/key-configuration';

const routes: Routes = [
   // { path: '', pathMatch: 'full', redirectTo: 'destination'},
    { path: 'destination', component: DestinationPathComponent},
    { path: 'codevalues', component: CodeValuesComponent },
    { path: 'keys', component: KeyConfigurationComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routableComponents = [
    DestinationPathComponent,
    CodeValuesComponent,
    KeyConfigurationComponent,
];
