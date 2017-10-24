import {Component} from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import { DataTablesModule } from 'angular-datatables';
import {HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {Ng2SmartTableModule, LocalDataSource} from 'ng2-smart-table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
    moduleId: module.id,
    selector: 'app-destination-path',
    templateUrl: './destination.path.html',
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
export class DestinationPathComponent {
   title = 'Destination Path Configuration';
  public data: Object;
  public temp_var: Object = false;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {

    this.http.get('assets/destination-path.json').subscribe((res: Response) => {
        this.data = res;
        this.temp_var = true;
      });
  }
    tableSettings = {
        actions: {
            add: false,
            edit: false,
            selectionMode: 'single',
            custom: [
                {
                    DestinationName: 'view',
                    title: 'View ',
                },
                {
                    DestinationName: 'Edit',
                    title: 'Edit ',
                },
            ],
        },
        columns: {
            DestinationName: {
                title: 'Destination Name',
                filter: false
            },
            RouteType: {
                title: 'Route Type',
                filter: false
            },
            ProcessingType: {
                title: 'Processing Type',
                filter: false
            }
        }
    }
}

