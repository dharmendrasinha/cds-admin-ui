import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-advpurposetypeaddnew',
  templateUrl: './addnew.component.html'
})
export class AddnewComponent implements OnInit {
  addNewForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addNewForm = this.fb.group({
      purposeTypeCode: [null, [Validators.required]],
      purposeTypeDescription: [null, [Validators.required]]
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
        this.router.navigate(['/maintenance/advpurposetype']);
        // eslint-disable-next-line no-console
        console.log(data);
      },
      error => {
        this.router.navigate(['/maintenance/advpurposetype']);
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );
  }

  public errorHandling = (control: string, error: string) => {
    if (this.addNewForm.controls[control].touched) {
      return this.addNewForm.controls[control].hasError(error);
    }
  };
}
