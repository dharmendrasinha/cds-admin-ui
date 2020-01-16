import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

const ELEMENT_DATA: any[] = [
  { industry: '', noteNumber: '', instrumentType: '', effectiveDate: '', fromCustomer: '', toCustomer: '' },
  { industry: '', noteNumber: '', instrumentType: '', effectiveDate: '', fromCustomer: '', toCustomer: '' }
];

@Component({
  selector: 'jhi-mergertransfer',
  templateUrl: './mergertransfer.component.html'
})
export class MergertransferComponent implements OnInit {
  displayedColumns: string[] = ['industry', 'noteNumber', 'instrumentType', 'effectiveDate', 'fromCustomer', 'toCustomer', 'action'];
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
