import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'jhi-advpurposetypeaddnew',
  templateUrl: './addnew.component.html'
})
export class AddnewComponent implements OnInit {
  addNewForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addNewForm = this.fb.group({
      id: [null],
      purposeTypeCode: [null],
      purposeTypeDescription: [null]
    });
  }

  submitForm() {
    const postObj = this.addNewForm.getRawValue();

    // eslint-disable-next-line no-console
    console.log(postObj);
  }
}
