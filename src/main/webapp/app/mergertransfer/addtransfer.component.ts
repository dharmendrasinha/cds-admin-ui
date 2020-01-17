import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'jhi-addmerger',
  templateUrl: './addtransfer.component.html'
})
export class AddtransferComponent implements OnInit {
  editForm: FormGroup;
  fromOptions: string[] = ['One', 'Two', 'Three'];
  toOptions: string[] = ['Five', 'Two', 'Three'];
  fromCustomerOptions: Observable<string[]>;
  toCustomerOptions: Observable<string[]>;
  fromCustomerNotesList: string[] = ['5 AFSB Note 1', '5 AFSB Note 2', '5 AFSB Note 3', '5 AFSB Note 4', '5 AFSB Note 5'];
  toCustomerNotesList: string[] = ['31 BOC Note 1', '31 BOC Note 2', '31 BOC Note 3', '31 BOC Note 4', '31 BOC Note 5'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.fromCustomerOptions = this.editForm.controls['fromCustomer'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterFrom(value))
    );

    this.toCustomerOptions = this.editForm.controls['toCustomer'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterTo(value))
    );
  }

  createForm() {
    this.editForm = this.fb.group({
      fromCustomer: [''],
      toCustomer: [''],
      effectiveDate: [null],
      allNotesFromCustomers: [false],
      allNotesToCustomers: [false],
      instrumentType: ['advance'],
      notesFromCustomers: new FormControl([]),
      notesToCustomers: new FormControl([])
    });
  }

  private _filterFrom(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.fromOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterTo(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.toOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  submitForm() {
    const postObj = this.editForm.getRawValue();

    // eslint-disable-next-line no-console
    console.log(JSON.stringify(postObj));
  }
}
