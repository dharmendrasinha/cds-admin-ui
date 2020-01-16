import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CustomerfinancialService } from './customerfinancial.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeletecustomerdialogComponent } from './deletecustomerdialog.component';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'jhi-customerfinancial',
  templateUrl: './customerfinancial.component.html'
})
export class CustomerfinancialComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'customerNumber',
    'toatlAsset',
    'cmpFlag',
    'updateDate',
    'mtg14FamilyAmt',
    'totalRFHA',
    'mvaPercentage',
    'capitalCompliantLevel',
    'watchStatus',
    'creditScore',
    'watchStatusEffectiveDate',
    'totalEligibileCollateralAmount',
    'securityEligibileCollateralAmount',
    'actions'
  ];
  dataSource: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dialogRef: MatDialogRef<DeletecustomerdialogComponent>;

  constructor(
    private customerfinancialService: CustomerfinancialService,
    private router: Router,
    public dialog: MatDialog,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.loadGrid();
  }

  loadGrid() {
    this.customerfinancialService.getAllCustomerFinancials().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editCustomer(obj: any) {
    sessionStorage.setItem('editCustomerfinancial', JSON.stringify(obj));
    this.router.navigate(['/maintenance/customerfinancial/edit', obj.id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id: Number) {
    this.dialogRef = this.dialog.open(DeletecustomerdialogComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Delete') {
        this.deleteCustomer(id);
      }
    });
  }

  deleteCustomer(id: Number) {
    const url = BUSINESS_SERVICE_URL + '/customerfinancial/deleteCustomerFinancial?customerFinancialId=' + id;
    this.httpClient.delete(url).subscribe(
      data => {
        this.loadGrid();
        // eslint-disable-next-line no-console
        console.log(data);
      },
      error => {
        this.loadGrid();
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );
  }
}
