import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'jhi-customerfinancial',
  templateUrl: './customerfinancial.component.html'
})
export class CustomerfinancialComponent implements OnInit {
  displayedColumns: string[] = [
    'customerNo',
    'totalAsset',
    'cmpFlag',
    'updateDate',
    'mtg14FamilyAmount',
    'totalRFHA',
    'MVA',
    'capitalCompliantLevel',
    'watchStatus',
    'creditScore',
    'watchStatusEffectiveDate',
    'totalEligibleCollateralAmount',
    'securityEligibleCollateralAmount',
    'actions'
  ];
  dataSource: any;

  constructor() {}

  ngOnInit() {}
}
