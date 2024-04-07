import { Component, OnDestroy, OnInit } from '@angular/core'
import { RemoteModuleLoaderService } from '../service/remote-module-loader.service'
import { ActivatedRoute, Router } from '@angular/router'
import { MySharedService } from 'my-shared'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  tasks = [
    { title: '到款认领', description: '商家到款认领专用查询入口', modulePath: '/home/mfe1' },
    { title: '财务新应用', description: '财务新应用专用查询入口', modulePath: '/home/mfe2' },
    { title: '其他应用', description: '其他应用专用查询入口', modulePath: '/home/mfe3' },
  ]
  mfe1data!: string
  mfe2data!: string
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private remoteModuleLoaderService: RemoteModuleLoaderService,
    private mySharedService: MySharedService
  ) {}
  ngOnInit(): void {
    console.log('Shell HomeComponent Init')
    this.mfe1data = this.mySharedService.getData()
    console.log('mySharedService', this.mySharedService)
    console.log('data', this.mfe1data)
    // this.mfe2data = this.mySharedService.getData()
    // console.log('data', this.mfe2data)
  }

  ngOnDestroy(): void {
    // console.log('Shell HomeComponent Destroy')
  }

  loadRemoteModule(modulePath: string) {
    this.router.navigate([modulePath])
  }

  goToTask(id: string) {
    // console.log(111)
    this.router.navigate(['/task'])
  }

  goToShell(): void {
    this.router.navigate([''])
  }
}
