import { Component, OnInit } from '@angular/core';
import { ProcessServiceService } from '../../services/process-service.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-process-popup',
  templateUrl: './process-popup.component.html',
  styleUrls: ['./process-popup.component.css']
})
export class ProcessPopupComponent implements OnInit {

  constructor(public processService: ProcessServiceService, public dialogRef: MatDialogRef<ProcessPopupComponent>) { }

  ngOnInit(): void {
  }
  onClose() {
    this.processService.formprocess.reset();
    this.processService.initializeFormGroup();
    this.dialogRef.close();
  }
}
