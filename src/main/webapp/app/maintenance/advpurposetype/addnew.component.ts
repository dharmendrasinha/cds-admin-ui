import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'jhi-advpurposetypeaddnew',
  templateUrl: './addnew.component.html'
})
export class AddnewComponent implements OnInit {
  addNewForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addNewForm = this.fb.group({
      purposeTypeCode: [null],
      purposeTypeDescription: [null]
    });
  }

  submitForm() {
    const postObj = this.addNewForm.getRawValue();
    const url =
      BUSINESS_SERVICE_URL +
      '/advancemaintenance/addPurposeType?purposeTypeCode=' +
      postObj.purposeTypeCode +
      '&purposeTypeDescription=' +
      postObj.purposeTypeDescription;
    this.httpClient.post(url, '').subscribe(
      data => {
        // eslint-disable-next-line no-console
        console.log(data);
      },
      error => {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );
  }
}
