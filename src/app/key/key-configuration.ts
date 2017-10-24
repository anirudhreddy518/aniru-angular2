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
    selector: 'key',
    templateUrl: './key-configuration.html',
    styles: [`
                
                :host /deep/ ng2-smart-table {box-sizing: border-box;display:table; font-size:16px;}
                :host /deep/ ng2-smart-table tr > td {  border: 1px solid black;padding:25px}
                :host /deep/ ng2-smart-table tbody > tr:nth-child(odd) {
                    background-color: #dddddd;
                }
                ng2-smart-table{padding-left: 10%;}
                #main{padding: 20px;}
                
            `]
})
export class KeyConfigurationComponent {
    title='key configuration';
    public data: Object;
    public temp_var: Object = false;
    constructor(private http: HttpClient) {}
     ngOnInit(): void {
        this.http.get('assets/keys.json').subscribe((res: Response) => {
            this.data = res;
            this.temp_var = true;
        });
    }
    tableSettings = {
        actions: {
            add: false,
            edit: true,
        },
        delete: {
            confirmDelete:true,
        },
        edit:{
            confirmSave: true,
            saveButtonContent: 'save'
        },
        columns: {
            KeyDescription: {
                title: 'Key Description',
                filter:false
            },
            Destination:{
                title: 'Destination',
                filter: false
            },
            CreatedBy:{
                title: 'Created By',
                filter: false
            },
            CreatedDate:{
                title: 'Created Date',
                filter: false
            },
            ModifiedBy:{
                title: 'Modified By',
                filter: false
            },
            ModifiedDate:{
                title: 'Modified Date',
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
        if (window.confirm('Are you sure want to Save?')) {
            event.newData['name'] += '+ added in code';
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
}