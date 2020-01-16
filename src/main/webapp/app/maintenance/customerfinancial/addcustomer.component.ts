import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'jhi-addcustomer',
  templateUrl: './addcustomer.component.html'
})
export class AddcustomerComponent implements OnInit {
  addForm: FormGroup;
  options: string[] = ['5 Abacus Federal Services  Bank', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private fb: FormBuilder) {}

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
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(postObj));
  }
}
