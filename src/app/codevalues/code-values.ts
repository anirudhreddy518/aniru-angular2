import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {DataTablesModule} from 'angular-datatables';
import {HttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@Component({
    moduleId: module.id,
    selector: 'app-code-values',
    templateUrl: './code-values.html',
    styles: [`
                
                :host /deep/ ng2-smart-table {box-sizing: border-box;display:table; font-size:16px;}
                :host /deep/ ng2-smart-table tr > td {  border: 1px solid black;}
                :host /deep/ ng2-smart-table tbody > tr:nth-child(even) {
                    background-color: #dddddd;
                }
                
                ng2-smart-table{padding-left: 10%;}
                #main{padding: 20px;}
                
            `]
})
export class CodeValuesComponent {
    title= 'Code Values';
    selected: string;
    selectedData;
    displayDialog: boolean;
    public data: Object;
    public temp_var: Object = false;
    constructor(private http: HttpClient) {}
    ngOnInit(): void {
        this.http.get('assets/code-values.json').subscribe((res: Response) => {
            this.data = res;
            this.temp_var = true;
        });
    }
  options =['HIE.DESTINATION_CODES', 'HIE.MESSAGE_STATUS_CODES', 'HIE.SOURCE_MSG_SYSTEM_CODES', 
           'HIE.ROUTE_TYPE_CODES','HIE.PROCESSING_TYPE_CODES','HIE.ORGANIZATION_TYPE_CODES',
           'HIE.ORGANIZATION_IDENTIFIERS','HIE.RACE_XREF','HIE.ETHNICITY_XREF',
            'HIE.LANGUAGE_XREF','HIE.RELIGION_XREF']
    
    tableSettings = {
        actions: {
            add: false,
            edit: true,
        },
        delete: {
            confirmDelete: true,
        },
        edit: {
            confirmSave: true,
            saveButtonContent: 'Save'
        },
        columns: {
            DestinationName: {
                title: 'Destination Name',
                filter: false
            },
            DestinationDescription: {
                title: 'Destination Description',
                filter: false
            }
        }
    }
    onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
    onSaveConfirm(event) {
        if (window.confirm('Are you sure want to update?')) {
            event.newData['name'] += '+ added in code';
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    onSelect(val){
        console.log(val);
        this.selectedData = this.data
    }
}

