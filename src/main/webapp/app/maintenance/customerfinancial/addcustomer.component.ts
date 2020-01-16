import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-addcustomer',
  templateUrl: './addcustomer.component.html'
})
export class AddcustomerComponent implements OnInit {
  addForm: FormGroup;
  options: string[] = ['5 Abacus Federal Services  Bank', 'Avon program', 'Unbranded'];
  filteredOptions: Observable<string[]>;

  constructor(private fb: FormBuilder, private datePipe: DatePipe, private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.createForm();
    this.filteredOptions = this.addForm.controls['customerNumber'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  createForm() {
    this.addForm = this.fb.group({
      customerNumber: [null],
      toatlAsset: [null],
      cmpFlag: [null],
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

  private _filter(value: string): string[] {
    const filterValue = value !== null ? value.toLowerCase() : '';

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  resetValue() {
    this.addForm.reset();
    this.addForm.patchValue({
      cmpFlag: 'Yes'
    });
  }

  resetCustomer() {
    this.addForm.patchValue({
      customerNumber: ''
    });
  }

  submitForm() {
    const postObj = this.addForm.getRawValue();
    postObj.updateDate = this.datePipe.transform(postObj.updateDate, 'yyyy-MM-dd');
    postObj.watchStatusEffectiveDate = this.datePipe.transform(postObj.watchStatusEffectiveDate, 'yyyy-MM-dd');
    const url = BUSINESS_SERVICE_URL + '/customerfinancial/addCustomerFinancial';
    this.httpClient.post(url, postObj).subscribe(
      data => {
        this.router.navigate(['/maintenance/customerfinancial']);
        // eslint-disable-next-line no-console
        console.log(data);
      },
      error => {
        this.router.navigate(['/maintenance/customerfinancial']);
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );

    // eslint-disable-next-line no-console
    console.log(JSON.stringify(postObj));
  }
}
