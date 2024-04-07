import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'remote-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks = [
    { title: 'Task 5', description: 'Description for Task 5' },
    { title: 'Task 6', description: 'Description for Task 6' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
