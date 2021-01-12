import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

interface Leave {
  value: string;
  leaveValue: string;
}

export interface PeriodicElement {
  srNo: number;
  type: string;
  fromDate: string;
  toDate: string;
  noOfDays: number;
  reason: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srNo: 1, type: 'Casual', fromDate: '12/1/2021',  toDate: '12/1/2021',noOfDays: 1, reason:'Personal',action:''},
  {srNo: 1, type: 'Casual', fromDate: '13/1/2021',  toDate: '13/1/2021',noOfDays: 1, reason:'Personal',action:''},
  {srNo: 1, type: 'Long Leave', fromDate: '15/1/2021',  toDate: '20/1/2021',noOfDays: 1, reason:'Personal',action:''},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  leaves: Leave[] = [
    {value: 'Casual', leaveValue: 'Casual'},
    {value: 'SickLeave', leaveValue: 'Sick Leave'},
    {value: 'LongLeave', leaveValue: 'Long Leave'}
  ];

  displayedColumns: string[] = ['srNo', 'type', 'fromDate', 'toDate', 'noOfDays', 'reason','action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
