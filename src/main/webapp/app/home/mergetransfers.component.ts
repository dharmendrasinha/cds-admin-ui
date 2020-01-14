import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA: any[] = [
  {
    industry: 'Industry 1',
    noteNumber: '50',
    instrumentType: '',
    effectiveDate: '12/31/2019',
    fromCustomer: '',
    toCustomer: '',
    actions: ''
  },
  {
    industry: 'Industry 2',
    noteNumber: '20',
    instrumentType: '',
    effectiveDate: '12/31/2019',
    fromCustomer: '',
    toCustomer: '',
    actions: ''
  },
  {
    industry: 'Industry 3',
    noteNumber: '100',
    instrumentType: '',
    effectiveDate: '12/31/2019',
    fromCustomer: '',
    toCustomer: '',
    actions: ''
  },
  {
    industry: 'Industry 4',
    noteNumber: '120',
    instrumentType: '',
    effectiveDate: '12/31/2019',
    fromCustomer: '',
    toCustomer: '',
    actions: ''
  },
  {
    industry: 'Industry 5',
    noteNumber: '150',
    instrumentType: '',
    effectiveDate: '12/31/2019',
    fromCustomer: '',
    toCustomer: '',
    actions: ''
  }
];

@Component({
  selector: 'jhi-mergetransfers',
  templateUrl: './mergetransfers.component.html'
})
export class MergetransfersComponent implements OnInit {
  displayedColumns: string[] = ['industry', 'noteNumber', 'instrumentType', 'effectiveDate', 'fromCustomer', 'toCustomer', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}
