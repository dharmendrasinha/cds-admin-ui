import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-editcustomer',
  templateUrl: './editcustomer.component.html'
})
export class EditcustomerComponent implements OnInit {
  editFormCustomer: FormGroup;
  id: string;
  formObj: any;

  constructor(private fb: FormBuilder, private actRoute: ActivatedRoute, private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.createForm();
    this.readValue();
  }

  createForm() {
    this.editFormCustomer = this.fb.group({
      id: [null],
      customerNumber: [null, [Validators.required]],
      toatlAsset: [null, [Validators.required]],
      cmpFlag: [null, [Validators.required]],
      updateDate: [null, [Validators.required]],
      mtg14FamilyAmt: [null, [Validators.required]],
      totalRFHA: [null, [Validators.required]],
      mvaPercentage: [null, [Validators.required]],
      capitalCompliantLevel: [null, [Validators.required]],
      watchStatus: [null, [Validators.required]],
      creditScore: [null, [Validators.required]],
      watchStatusEffectiveDate: [null, [Validators.required]],
      totalEligibileCollateralAmount: [null, [Validators.required]],
      securityEligibileCollateralAmount: [null, [Validators.required]]
    });
  }

  resetValue() {}

  readValue() {
    this.formObj = JSON.parse(sessionStorage.getItem('editCustomerfinancial'));
    this.editFormCustomer.patchValue({
      id: this.id,
      customerNumber: this.formObj.customerNumber,
      toatlAsset: this.formObj.toatlAsset,
      cmpFlag: this.formObj.cmpFlag,
      updateDate: this.formObj.updateDate,
      mtg14FamilyAmt: this.formObj.mtg14FamilyAmt,
      totalRFHA: this.formObj.totalRFHA,
      mvaPercentage: this.formObj.mvaPercentage,
      capitalCompliantLevel: this.formObj.capitalCompliantLevel,
      watchStatus: this.formObj.watchStatus,
      creditScore: this.formObj.creditScore,
      watchStatusEffectiveDate: this.formObj.watchStatusEffectiveDate,
      totalEligibileCollateralAmount: this.formObj.totalEligibileCollateralAmount,
      securityEligibileCollateralAmount: this.formObj.securityEligibileCollateralAmount
    });
  }

  submitForm() {
    const postObj = this.editFormCustomer.getRawValue();
    const url = BUSINESS_SERVICE_URL + '/customerfinancial/updateCustomerFinancial';
    this.httpClient.post(url, postObj).subscribe(
      data => {
        sessionStorage.removeItem('editCustomerfinancial');
        this.router.navigate(['/maintenance/customerfinancial']);
        // eslint-disable-next-line no-console
        console.log(data);
      },
      error => {
        sessionStorage.removeItem('editCustomerfinancial');
        this.router.navigate(['/maintenance/customerfinancial']);
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );
  }

  public errorHandling = (control: string, error: string) => {
    if (this.editFormCustomer.controls[control].touched) {
      return this.editFormCustomer.controls[control].hasError(error);
    }
  };
}
