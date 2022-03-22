import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../../services/home-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-popup',
  templateUrl: './detail-popup.component.html',
  styleUrls: ['./detail-popup.component.css']
})
export class DetailPopupComponent implements OnInit {

  constructor(public service: HomeServiceService, public dialogRef: MatDialogRef<DetailPopupComponent>) { }

  ngOnInit(): void {
  }
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
