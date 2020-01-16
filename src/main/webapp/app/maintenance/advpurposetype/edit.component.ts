import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdvpurposetypeService } from './advpurposetype.service';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-advpurposetypeedit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  id: string;
  formObj: any;

  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private advpurposetypeService: AdvpurposetypeService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.creatForm();
    this.readValue();
  }

  creatForm() {
    this.editForm = this.fb.group({
      id: [this.id],
      purposeTypeCode: [null, [Validators.required]],
      purposeTypeDescription: [null, [Validators.required]]
    });
  }

  readValue() {
    this.formObj = JSON.parse(sessionStorage.getItem('editPurposeType'));
    this.editForm.patchValue({
      id: this.id,
      purposeTypeCode: this.formObj.purposeTypeCode,
      purposeTypeDescription: this.formObj.purposeTypeDescription
    });
  }

  submitForm() {
    const postObj = this.editForm.getRawValue();

    const url = BUSINESS_SERVICE_URL + '/advancemaintenance/updatePurposeType';
    this.httpClient.post(url, postObj).subscribe(
      data => {
        sessionStorage.removeItem('editPurposeType');
        this.router.navigate(['/maintenance/advpurposetype']);
        // eslint-disable-next-line no-console
        console.log(data);
      },
      error => {
        sessionStorage.removeItem('editPurposeType');
        this.router.navigate(['/maintenance/advpurposetype']);
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );
  }

  public errorHandling = (control: string, error: string) => {
    if (this.editForm.controls[control].touched) {
      return this.editForm.controls[control].hasError(error);
    }
  };
}
