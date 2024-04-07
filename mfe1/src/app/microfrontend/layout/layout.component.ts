import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MySharedService } from 'my-shared';
@Component({
  selector: 'remote-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private mySharedService: MySharedService
  ) {}

  ngOnInit(): void {
    console.log(this);
    console.log('Remote LayoutComponent Init');
  }

  ngOnDestroy(): void {
    console.log('Remote LayoutComponent Destroy');
  }
  goToRemote1(): void {
    this.mySharedService.setData('我是remote1发送过来的数据');
    this.router.navigate(['']);
  }
}
