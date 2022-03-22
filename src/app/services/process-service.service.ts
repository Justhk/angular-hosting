import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ConnectableObservable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessServiceService {

  formprocess: FormGroup = new FormGroup({
    $key: new FormControl(null),
    lable2: new FormControl(''),
    lable3: new FormControl(''),
    lable4: new FormControl('')
  });

  constructor() { }
  initializeFormGroup() {
    this.formprocess.setValue({
      $key: null,
      lable2: '',
      lable3: '',
      lable4: ''
    });
  }
  populateForm(l2: string, l3: string, l4: string) {
    this.formprocess.setValue({
      $key: null,
      lable2: l2,
      lable3: l3,
      lable4: l4
    });
  }
}
