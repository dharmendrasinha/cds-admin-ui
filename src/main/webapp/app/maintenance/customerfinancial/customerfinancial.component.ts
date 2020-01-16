import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CustomerfinancialService } from './customerfinancial.service';
import { Router } from '@angular/router';

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

  constructor(private customerfinancialService: CustomerfinancialService, private router: Router) {}

  ngOnInit() {
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
}
