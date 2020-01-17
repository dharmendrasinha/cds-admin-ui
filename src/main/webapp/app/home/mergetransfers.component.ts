import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { HomeundotransferdialogComponent } from './homeundotransferdialog.component';
import { HomeundomergerdialogComponent } from './homeundomergerdialog.component';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from './home.service';

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

  constructor(private dialog: MatDialog, private httpClient: HttpClient, private homeService: HomeService) {}

  ngOnInit() {
    this.loadMergerGrid();
    this.loadTransferGrid();
  }

  loadMergerGrid() {
    this.homeService.getMergers().subscribe((res: any) => {
      this.mergerDataSource = new MatTableDataSource(res.slice(0, 5));
    });
  }

  loadTransferGrid() {
    this.homeService.getTransfers().subscribe((res: any) => {
      this.transferDataSource = new MatTableDataSource(res.slice(0, 5));
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
    this.httpClient.post(url, postObj).subscribe(
      data => {
        this.loadMergerGrid();
        // eslint-disable-next-line no-console
        console.log(data);
      },
      error => {
        this.loadMergerGrid();
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );
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
    this.httpClient.post(url, postObj).subscribe(
      data => {
        this.loadTransferGrid();
        // eslint-disable-next-line no-console
        console.log(data);
      },
      error => {
        this.loadTransferGrid();
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );
  }
}
