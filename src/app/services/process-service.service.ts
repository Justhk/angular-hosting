import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ConnectableObservable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessServiceService {

  formprocess: FormGroup = new FormGroup({
    $key: new FormControl(null),
    label2: new FormControl(''),
    label3: new FormControl(''),
    label4: new FormControl('')
  });

  constructor() { }
  initializeFormGroup() {
    this.formprocess.setValue({
      $key: null,
      label2: '',
      label3: '',
      label4: ''
    });
  }
  populateForm(l2: string, l3: string, l4: string) {
    this.formprocess.setValue({
      $key: null,
      label2: l2,
      label3: l3,
      label4: l4
    });
  }
}
