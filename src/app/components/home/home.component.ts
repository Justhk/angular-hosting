import { Component, OnInit, Inject } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DOCUMENT } from '@angular/common'; 
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DetailPopupComponent } from '../detail-popup/detail-popup.component';
import { ButtonPopupComponent } from '../button-popup/button-popup.component';
import { ProcessPopupComponent } from '../process-popup/process-popup.component';
import { HttpClient } from '@angular/common/http';
import { TableDataModel } from '../../models/tabledatamodel';
import { MatPaginator } from '@angular/material/paginator';
import { HomeServiceService } from '../../services/home-service.service';
import { ProcessServiceService } from '../../services/process-service.service';

const ELEMENT_DATA: TableDataModel[] = [];

/**
 * @title Basic use of `<table mat-table>`
 */
 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['COLUMN_0', 'COLUMN_1', 'COLUMN_2', 'COLUMN_3', 'COLUMN_4'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  name: string='';
  selectedRow: string[] = [];

  constructor(private _liveAnnouncer: LiveAnnouncer, @Inject(DOCUMENT) document: Document, public dialog: MatDialog,
  private http: HttpClient, private service: HomeServiceService, private processService: ProcessServiceService) { }

  @ViewChild(MatSort) sort = new MatSort();
  @ViewChild(MatPaginator, {static: false}) paginator: any;

  ngOnInit(): void {
    this.http.get('assets/SAMPLE_INPUT.txt', { responseType: 'text' as 'json'}).subscribe(data => {
      var str = data.toString(); 
      var splitted = str.split("\n"); 
      for (let value of splitted) {
        var elements = value.split(",", 5).map(function(item) {
          return item.trim();
        });
        var model = new TableDataModel();
        model.COLUMN_0 = elements[0];
        model.COLUMN_1 = elements[1];
        model.COLUMN_2 = elements[2];
        model.COLUMN_3 = elements[3];
        model.COLUMN_4 = elements[4];

        ELEMENT_DATA.push(model);
      }
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  announceSortChange(sortState: Sort) {
    this.selectedRow = [];
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {  
      sortState.direction = 'asc';
      this.sort.active = sortState.active;
      this.sort.direction = sortState.direction;
    }
  }

  showDetails(event: any)
  {
    var has = false;
    var rowString = this.getSelectedRowString(event);
    this.selectedRow.forEach((element, index)=>{
      if(element === rowString) {
        has = true;
      };
   });
   if(has){
      var content = this.selectedRow.map(element=> element).join("\n");
      var fileName = "SAMPLE_OUTPUT.txt";
      this.saveTextAsFile(content, fileName);
   }
   else{
    this.service.populateForm(event);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "20%";
    this.dialog.open(DetailPopupComponent,dialogConfig);
   }
  }

  saveTextAsFile (data :any, filename: string){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'SAMPLE_OUTPUT.txt'

    let blob = new Blob([data], {type: 'text/plain'});
    let e = document.createEvent('MouseEvents');
    let a = document.createElement('a');
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.click();
  }

  showButtonPopup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "20%";
    this.dialog.open(ButtonPopupComponent, dialogConfig);
  }

  showProcessPopup() {
    var lable2 = (<HTMLInputElement>document.getElementById("lable2")).value;
    var lable3 = (<HTMLInputElement>document.getElementById("lable3")).value;
    var lable4 = (<HTMLInputElement>document.getElementById("lable4")).value;
    this.processService.populateForm(lable2, lable3, lable4);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "20%";
    this.dialog.open(ProcessPopupComponent, dialogConfig);
  }
  getSelectedRowString(row: any){
    var rowString = '';
    if(row.COLUMN_0.trim().length > 0){
      rowString += row.COLUMN_0;
    }
    if(row.COLUMN_0.trim().length > 0 && row.COLUMN_1.trim().length > 0){
      rowString += ", " + row.COLUMN_1;
    }
    else if(row.COLUMN_0.trim().length === 0 && row.COLUMN_1.trim().length > 0){
      rowString += row.COLUMN_1;
    }
    if(row.COLUMN_1.trim().length > 0 && row.COLUMN_2.trim().length > 0){
      rowString += ", " + row.COLUMN_2;
    }
    else if(row.COLUMN_1.trim().length === 0 && row.COLUMN_2.trim().length > 0){
      rowString += row.COLUMN_2;
    }
    if(row.COLUMN_2.trim().length > 0 && row.COLUMN_3.trim().length > 0){
      rowString += ", " + row.COLUMN_3;
    }
    else if(row.COLUMN_2.trim().length === 0 && row.COLUMN_3.trim().length > 0){
      rowString += row.COLUMN_3;
    }
    if(row.COLUMN_3.trim().length > 0 && row.COLUMN_4.trim().length > 0){
      rowString += ", " + row.COLUMN_4;
    }
    else if(row.COLUMN_3.trim().length === 0 && row.COLUMN_4.trim().length > 0){
      rowString += row.COLUMN_4;
    }
    return rowString;
  }
  selectRow(event: any, row: any){
    console.log(event);
    var rowString = this.getSelectedRowString(row);
    var element = (<HTMLInputElement>document.getElementById("tbl-tr-" + row.COLUMN_0));
    if(element.classList.contains("row-clicked")){
      element.classList.remove("row-clicked");
      this.selectedRow.forEach((element, index)=>{
        if(element === rowString) this.selectedRow.splice(index,1);
     });
    }
    else{
      element.classList.add("row-clicked");
      this.selectedRow.push(rowString);
    }
  }

  bgColor(column1:string){
    var color; 
    var lastChar = column1.substr(column1.length - 1);;
    switch(parseInt(lastChar)){
      case 0: { 
        return "white";
        break; 
     } 
     case 1: { 
      return "red";
        break; 
     } 
     case 2: { 
      return "white";
        break; 
     } 
     default: { 
      return "white"; 
        break; 
     } 
    }
    return "white";
  }

  textColor(column1:string){
    var color; 
    var lastChar = column1.substr(column1.length - 1);;
    switch(parseInt(lastChar)){
      case 0: { 
        return "red";
        break; 
     } 
     case 1: { 
      return "green";
        break; 
     } 
     case 2: { 
      return "blue";
        break; 
     } 
     default: { 
      return "black"; 
        break; 
     } 
    }
    return "black";
  }
}