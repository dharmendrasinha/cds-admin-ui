import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UndomergerdialogComponent } from './undomergerdialog.component';
import { UndotransferdialogComponent } from './undotransferdialog.component';
import { HttpClient } from '@angular/common/http';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';
import { MergertransferService } from './mergertransfer.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'jhi-mergertransfer',
  templateUrl: './mergertransfer.component.html'
})
export class MergertransferComponent implements OnInit {
  displayedColumnsMergers: string[] = [
    'mergerId',
    'noteId',
    'industry',
    'noteNo',
    'instrumentType',
    'effectiveDate',
    'customerFrom',
    'customerTo',
    'action'
  ];
  displayedColumnsTransfers: string[] = [
    'transferId',
    'noteId',
    'industry',
    'noteNo',
    'instrumentType',
    'effectiveDate',
    'customerFrom',
    'customerTo',
    'action'
  ];
  transferDataSource: any;
  mergerDataSource: any;
  @ViewChild('sort1', { static: true }) sort1: MatSort;
  @ViewChild('sort2', { static: true }) sort2: MatSort;
  @ViewChild('matPaginator1', { static: true }) paginator1: MatPaginator;
  @ViewChild('matPaginator2', { static: true }) paginator2: MatPaginator;
  undoTransferDialogRef: MatDialogRef<UndotransferdialogComponent>;
  undoMergerDialogRef: MatDialogRef<UndomergerdialogComponent>;
  mergerCustomerId: Number;
  transferCustomerId: Number;
  mergerOptions: any[];
  mergerFilteredOptions: Observable<any[]>;
  transferOptions: any[];
  transferFilteredOptions: Observable<any[]>;

  searchForm: FormGroup;

  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private mergertransferService: MergertransferService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
    // this.loadMergerGrid();
    // this.loadTransferGrid();

    this.mergertransferService.getAllMergerCustomers().subscribe((res: any) => {
      this.mergerOptions = res;
      this.mergerFilteredOptions = this.searchForm.controls['mergerCustomer'].valueChanges.pipe(
        startWith(''),
        map(value => this._filterMerger(value))
      );
    });

    this.mergertransferService.getAllTransferCustomers().subscribe((res: any) => {
      this.transferOptions = res;
      this.transferFilteredOptions = this.searchForm.controls['transferCustomer'].valueChanges.pipe(
        startWith(''),
        map(value => this._filterMerger(value))
      );
    });
  }

  createForm() {
    this.searchForm = this.fb.group({
      mergerCustomer: [''],
      transferCustomer: ['']
    });
  }

  private _filterMerger(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.mergerOptions.filter(option => option.customerName.toLowerCase().includes(filterValue));
  }

  private _filterTransfer(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.mergerOptions.filter(option => option.customerName.toLowerCase().includes(filterValue));
  }

  getMergers(value) {
    this.mergerCustomerId = value;

    this.mergertransferService.getMergers(this.mergerCustomerId).subscribe((res: any) => {
      this.mergerDataSource = new MatTableDataSource(res);
      this.mergerDataSource.paginator = this.paginator1;
      this.mergerDataSource.sort = this.sort1;
    });

    // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    // this.dataSource.paginator = this.paginator1;
    // this.dataSource.sort = this.sort1;
  }

  getTransfers(value) {
    this.transferCustomerId = value;

    this.mergertransferService.getTransfers(this.transferCustomerId).subscribe((res: any) => {
      this.transferDataSource = new MatTableDataSource(res);
      this.transferDataSource.paginator = this.paginator2;
      this.transferDataSource.sort = this.sort2;
    });
  }

  openMergerDialog(rowObj: any) {
    this.undoMergerDialogRef = this.dialog.open(UndomergerdialogComponent);

    this.undoMergerDialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Undo') {
        this.undoMergerSubmit(rowObj);
      }
    });
  }

  undoMergerSubmit(rowObj: any) {
    const postObj = {
      mergerList: [{ noteId: rowObj.noteId, mergerId: rowObj.mergerId }]
    };

    const url = BUSINESS_SERVICE_URL + '/merger/undoMerger';
    this.httpClient.request('delete', url, { body: postObj }).subscribe(() => {
      this.getMergers(this.mergerCustomerId);
    });
  }

  openTransferDialog(rowObj: any) {
    this.undoTransferDialogRef = this.dialog.open(UndotransferdialogComponent);

    this.undoTransferDialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Undo') {
        this.undoTransferSubmit(rowObj);
      }
    });
  }

  undoTransferSubmit(rowObj: any) {
    const postObj = {
      transferList: [{ noteId: rowObj.noteId, transferId: rowObj.transferId }]
    };
    const url = BUSINESS_SERVICE_URL + '/transfer/undoTransfer';
    this.httpClient.request('delete', url, { body: postObj }).subscribe(() => {
      this.getTransfers(this.transferCustomerId);
    });
  }
}
