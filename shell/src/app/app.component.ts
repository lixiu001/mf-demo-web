import { loadRemoteModule } from '@angular-architects/module-federation'
import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core'
import { Router } from '@angular/router'
import { MySharedService } from 'my-shared';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styleUrls: ['./app.component.scss'],
  providers: [
    // MySharedService
  ],
})
export class AppComponent implements OnInit {
  title = 'shell'
  data: any
  constructor(
    private router: Router,
    private mySharedService: MySharedService,
    private resolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef
  ) {
    this.data = mySharedService.getData() || '123213'
  }

  async ngOnInit() {
    console.log(this)
  }

  goToTask(type: string) {
    this.router.navigate(['/task'])
  }

  test() {
  }

  goToShell(): void {
    this.router.navigate([''])
  }
}
