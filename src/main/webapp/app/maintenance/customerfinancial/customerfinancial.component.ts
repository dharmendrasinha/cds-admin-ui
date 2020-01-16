import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

const ELEMENT_DATA: any[] = [
  {
    id: 1,
    customerNumber: '5 Abacus Federal Services  Bank',
    toatlAsset: 341795000.0,
    cmpFlag: 'Yes',
    updateDate: '2019-06-30',
    mtg14FamilyAmt: 187816363.0,
    totalRFHA: 229336000.0,
    mvaPercentage: 80.0,
    capitalCompliantLevel: 'Well',
    watchStatus: 'Pass with care',
    creditScore: 3.96,
    watchStatusEffectiveDate: '2019-06-30',
    totalEligibileCollateralAmount: 285588000.0,
    securityEligibileCollateralAmount: 0.0
  },
  {
    id: 2,
    customerNumber: '5 Abacus Federal Services  Bank',
    toatlAsset: 341795000.0,
    cmpFlag: 'Yes',
    updateDate: '2019-06-30',
    mtg14FamilyAmt: 187816363.0,
    totalRFHA: 229336000.0,
    mvaPercentage: 80.0,
    capitalCompliantLevel: 'Well',
    watchStatus: 'Pass with care',
    creditScore: 3.96,
    watchStatusEffectiveDate: '2019-06-30',
    totalEligibileCollateralAmount: 285588000.0,
    securityEligibileCollateralAmount: 0.0
  }
];

@Component({
  selector: 'jhi-customerfinancial',
  templateUrl: './customerfinancial.component.html'
})
export class CustomerfinancialComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'customerNumber',
    'totalAsset',
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

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
