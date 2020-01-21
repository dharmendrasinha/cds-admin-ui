import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { HomeundotransferdialogComponent } from './homeundotransferdialog.component';
import { HomeundomergerdialogComponent } from './homeundomergerdialog.component';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'jhi-mergetransfers',
  templateUrl: './mergetransfers.component.html'
})
export class MergetransfersComponent implements OnInit {
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
  undoTransferDialogRef: MatDialogRef<HomeundotransferdialogComponent>;
  undoMergerDialogRef: MatDialogRef<HomeundomergerdialogComponent>;
  mergerCustomerId: Number;
  transferCustomerId: Number;
  mergerOptions: any[];
  mergerFilteredOptions: Observable<any[]>;
  transferOptions: any[];
  transferFilteredOptions: Observable<any[]>;
  searchForm: FormGroup;

  constructor(private dialog: MatDialog, private httpClient: HttpClient, private homeService: HomeService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    // this.loadMergerGrid();
    // this.loadTransferGrid();

    this.homeService.getAllMergerCustomers().subscribe((res: any) => {
      this.mergerOptions = res;
      this.mergerFilteredOptions = this.searchForm.controls['mergerCustomer'].valueChanges.pipe(
        startWith(''),
        map(value => this._filterMerger(value))
      );
    });

    this.homeService.getAllTransferCustomers().subscribe((res: any) => {
      this.transferOptions = res;
      this.transferFilteredOptions = this.searchForm.controls['transferCustomer'].valueChanges.pipe(
        startWith(''),
        map(value => this._filterMerger(value))
      );
    });
  }

  // loadMergerGrid() {
  //   this.homeService.getMergers().subscribe((res: any) => {
  //     this.mergerDataSource = new MatTableDataSource(res.slice(0, 5));
  //   });
  // }

  // loadTransferGrid() {
  //   this.homeService.getTransfers().subscribe((res: any) => {
  //     this.transferDataSource = new MatTableDataSource(res.slice(0, 5));
  //   });
  // }

  createForm() {
    this.searchForm = this.fb.group({
      mergerCustomer: [''],
      transferCustomer: ['']
    });
  }

  openMergerDialog(rowObj: any) {
    this.undoMergerDialogRef = this.dialog.open(HomeundomergerdialogComponent);

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
    this.httpClient.request('delete', url, { body: postObj }).subscribe();
  }

  openTransferDialog(rowObj: any) {
    this.undoTransferDialogRef = this.dialog.open(HomeundotransferdialogComponent);

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
    this.httpClient.request('delete', url, { body: postObj }).subscribe();
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
    this.homeService.getMergers(this.mergerCustomerId).subscribe((res: any) => {
      this.mergerDataSource = new MatTableDataSource(res.slice(0, 5));
    });
  }

  getTransfers(value) {
    this.transferCustomerId = value;

    this.homeService.getTransfers(this.transferCustomerId).subscribe((res: any) => {
      this.transferDataSource = new MatTableDataSource(res.slice(0, 5));
    });
  }
}
