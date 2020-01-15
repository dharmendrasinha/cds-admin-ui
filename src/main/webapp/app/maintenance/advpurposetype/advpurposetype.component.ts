import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteadvpurposetypedialogComponent } from './deleteadvpurposetypedialog.component';

const ELEMENT_DATA: any[] = [
  { id: 1, purposeTypeCode: 'L', purposeTypeDescription: 'Liquidity' },
  { id: 2, purposeTypeCode: 'C', purposeTypeDescription: 'CMA' },
  { id: 3, purposeTypeCode: 'O', purposeTypeDescription: 'Other' }
];

@Component({
  selector: 'jhi-advpurposetype',
  templateUrl: './advpurposetype.component.html'
})
export class AdvpurposetypeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'purposeTypeCode', 'purposeTypeDescription', 'actions'];
  dataSource: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  fileNameDialogRef: MatDialogRef<DeleteadvpurposetypedialogComponent>;

  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.fileNameDialogRef = this.dialog.open(DeleteadvpurposetypedialogComponent);
  }
}
