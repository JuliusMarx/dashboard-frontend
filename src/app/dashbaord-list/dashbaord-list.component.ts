import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashbaord-list',
  templateUrl: './dashbaord-list.component.html',
  styleUrls: ['./dashbaord-list.component.scss']
})
export class DashbaordListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() user: any;

}
