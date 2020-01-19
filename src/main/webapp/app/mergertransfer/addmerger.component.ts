import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';
import { Router } from '@angular/router';
import { MergertransferService } from './mergertransfer.service';
import { MatSelectionList } from '@angular/material/list';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'jhi-addmerger',
  templateUrl: './addmerger.component.html'
})
export class AddmergerComponent implements OnInit {
  addForm: FormGroup;
  fromOptions: any[];
  fromFilteredOptions: Observable<any[]>;
  toOptions: any[];
  toFilteredOptions: Observable<any[]>;
  fromCustomerId: Number;
  toCustomerId: Number;

  fromCustomerNotesList: any[] = [];
  toCustomerNotesList: any[] = [];
  @ViewChild('fromCustomerNotesSelectList', { static: true }) fromCustomerNotesSelectList: MatSelectionList;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private httpClient: HttpClient,
    private router: Router,
    private mergertransferService: MergertransferService
  ) {}

  ngOnInit() {
    this.createForm();
    this.mergertransferService.getAllMergerCustomers().subscribe((res: any) => {
      this.fromOptions = res;
      this.fromFilteredOptions = this.addForm.controls['fromCustomer'].valueChanges.pipe(
        startWith(''),
        map(value => this._filterFrom(value))
      );

      this.toOptions = res;
      this.toFilteredOptions = this.addForm.controls['toCustomer'].valueChanges.pipe(
        startWith(''),
        map(value => this._filterTo(value))
      );
    });
  }

  private _filterFrom(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.fromOptions.filter(option => option.customerName.toLowerCase().includes(filterValue));
  }

  private _filterTo(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.toOptions.filter(option => option.customerName.toLowerCase().includes(filterValue));
  }

  createForm() {
    this.addForm = this.fb.group({
      fromCustomer: [''],
      toCustomer: [''],
      effectiveDate: [null],
      instrumentType: [{ value: 'advance', disabled: true }],
      notesFromCustomers: new FormControl([])
    });
  }

  submitForm() {
    const formObj = this.addForm.getRawValue();
    const currentDate = new Date().toISOString();
    const postObj = {
      effectiveDate: this.datePipe.transform(formObj.effectiveDate, 'yyyy-MM-dd'),
      customerFrom: this.fromCustomerId,
      customerTo: this.toCustomerId,
      action: 'Merger1',
      mergingEntity: 'Merger1',
      timeStamp: currentDate,
      noteIds: formObj.notesFromCustomers,
      systems: { id: 1, systemsEntity: 'indexing Oval monitor' }
    };

    const url = BUSINESS_SERVICE_URL + '/merger/addMerger';
    this.httpClient.post(url, postObj).subscribe(
      data => {
        this.router.navigate(['/mergertransfer']);
        // eslint-disable-next-line no-console
        console.log(data);
      },
      error => {
        this.router.navigate(['/mergertransfer']);
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );

    // eslint-disable-next-line no-console
    console.log(postObj);
  }

  selectDeselectAll(event: MatCheckboxChange) {
    if (event.checked) {
      this.fromCustomerNotesSelectList.selectAll();
    } else {
      this.fromCustomerNotesSelectList.deselectAll();
    }
  }

  getFromCustomerId(value) {
    this.fromCustomerId = value;
    this.mergertransferService.getMergerNotesByCustomerFrom(this.fromCustomerId, 1).subscribe((res: any) => {
      this.fromCustomerNotesList = res;
    });
  }

  getToCustomerId(value) {
    this.toCustomerId = value;
    this.mergertransferService.getMergerNotesByCustomerTo(this.toCustomerId, 1).subscribe((res: any) => {
      this.toCustomerNotesList = res;
    });
  }
}
