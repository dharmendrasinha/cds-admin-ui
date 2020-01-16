import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteadvpurposetypedialogComponent } from './deleteadvpurposetypedialog.component';
import { AdvpurposetypeService } from './advpurposetype.service';
import { Router } from '@angular/router';

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

  constructor(public dialog: MatDialog, public advpurposetypeService: AdvpurposetypeService, public router: Router) {}
  ngOnInit() {
    this.advpurposetypeService.getAllPurposeTypes().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.fileNameDialogRef = this.dialog.open(DeleteadvpurposetypedialogComponent);
  }

  editPurpoeType(obj: any) {
    sessionStorage.setItem('editPurposeType', JSON.stringify(obj));
    this.router.navigate(['/maintenance/advpurposetype/edit', obj.id]);
  }
}
