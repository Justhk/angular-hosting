import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    COLUMN_0: new FormControl(''),
    COLUMN_1: new FormControl(''),
    COLUMN_2: new FormControl(''),
    COLUMN_3: new FormControl(''),
    COLUMN_4: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      COLUMN_0: '',
      COLUMN_1: '',
      COLUMN_2: '',
      COLUMN_3: '',
      COLUMN_4: ''
    });
  }
  populateForm(row : any) {
    this.form.setValue({
      $key: null,
      COLUMN_0: row.COLUMN_0,
      COLUMN_1: row.COLUMN_1,
      COLUMN_2: row.COLUMN_2,
      COLUMN_3: row.COLUMN_3,
      COLUMN_4: row.COLUMN_4
    });
  }
}
