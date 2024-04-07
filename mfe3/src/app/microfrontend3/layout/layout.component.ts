import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MySharedService } from 'my-shared';

@Component({
  selector: 'remote-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  data: any;

  constructor(
    private router: Router,
    private mySharedService: MySharedService
  ) {}

  ngOnInit(): void {}

  goToRemote(): void {
    // this.test();
    console.log('goToRemote');
    this.mySharedService.setData('我是remote3发送过来的数据');
    // console.log('data', this.data);
    this.router.navigate(['']);
  }
}
