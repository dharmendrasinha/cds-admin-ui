import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  options: string[] = [
    '5 Abacus Federal Services  Bank',
    '7 Amboy Bank',
    '9 Amalgamated Bank',
    '11 American Communty Bank',
    '65 BNB Bank',
    '66 Blue Foundry Bank',
    "117 Mariner's Bank",
    '127 PCSB Bank',
    '130 Emigrant Bank',
    '171 Generations Bank'
  ];
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

  private _filter(value: string): string[] {
    const filterValue = value !== null ? value.toLowerCase() : '';

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  resetValue() {
    this.addForm.reset();
  }

  resetCustomer() {
    this.addForm.controls['customerNumber'].reset();
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
  }

  public errorHandling = (control: string, error: string) => {
    if (this.addForm.controls[control].touched) {
      return this.addForm.controls[control].hasError(error);
    }
  };
}
