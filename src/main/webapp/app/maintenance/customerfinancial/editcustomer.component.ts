import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-editcustomer',
  templateUrl: './editcustomer.component.html'
})
export class EditcustomerComponent implements OnInit {
  editFormCustomer: FormGroup;
  id: string;

  constructor(private fb: FormBuilder, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.createForm();
  }

  createForm() {
    this.editFormCustomer = this.fb.group({
      customerNumber: [null],
      totalAsset: [null],
      cmpFlag: ['Yes'],
      updateDate: [null],
      mtg14FamilyAmt: [null],
      totalRFHA: [null],
      mvaPercentage: [null],
      capitalCompliantLevel: [null],
      watchStatus: [null],
      creditScore: [null],
      watchStatusEffectiveDate: [null],
      totalEligibileCollateralAmount: [null],
      securityEligibileCollateralAmount: [null]
    });
  }

  resetValue() {}

  submitForm() {
    const postObj = this.editFormCustomer.getRawValue();
    postObj.id = this.id;
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(postObj));
  }
}
