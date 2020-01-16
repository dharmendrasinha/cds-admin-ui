import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteadvpurposetypedialogComponent } from './deleteadvpurposetypedialog.component';
import { AdvpurposetypeService } from './advpurposetype.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';

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

  constructor(
    public dialog: MatDialog,
    public advpurposetypeService: AdvpurposetypeService,
    public router: Router,
    private httpClient: HttpClient
  ) {}
  ngOnInit() {
    this.loadGrid();
  }

  loadGrid() {
    this.advpurposetypeService.getAllPurposeTypes().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id: Number) {
    this.fileNameDialogRef = this.dialog.open(DeleteadvpurposetypedialogComponent);

    this.fileNameDialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Delete') {
        this.deletePurposeType(id);
      }
    });
  }

  editPurpoeType(obj: any) {
    sessionStorage.setItem('editPurposeType', JSON.stringify(obj));
    this.router.navigate(['/maintenance/advpurposetype/edit', obj.id]);
  }

  deletePurposeType(id: Number) {
    const url = BUSINESS_SERVICE_URL + '/advancemaintenance/deletePurposeType?purposeTypeId=' + id;
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
