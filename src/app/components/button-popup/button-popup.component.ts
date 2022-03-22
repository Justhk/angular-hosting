import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-button-popup',
  templateUrl: './button-popup.component.html',
  styleUrls: ['./button-popup.component.css']
})
export class ButtonPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ButtonPopupComponent>) { }

  ngOnInit(): void {
  }
  onClose() {
    this.dialogRef.close();
  }
}
