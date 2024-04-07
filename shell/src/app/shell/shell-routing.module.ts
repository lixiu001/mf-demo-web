import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'
import { HomeComponent } from './home/home.component'
import { loadRemoteModule } from '@angular-architects/module-federation'
// import { LoadRemoteGuard } from './guards/load-remote.guard'
// import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [LoadRemoteGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          {
            path: 'mfe1',
            loadChildren: () =>
              loadRemoteModule({
                remoteEntry: 'http://localhost:3001/remoteEntry.js', // 替换成线上地址
                remoteName: 'mfe1',
                exposedModule: './Module',
              }).then((m: any) => {
                return m.MicrofrontendModule
              }),
          },
          {
            path: 'mfe2',
            loadChildren: () =>
              loadRemoteModule({
                remoteEntry: 'http://localhost:3002/remoteEntry.js',
                remoteName: 'mfe2',
                exposedModule: './Module1',
              }).then((m: any) => {
                return m.Microfrontend1Module
              }),
          },
          {
            path: 'mfe3',
            loadChildren: () =>
              loadRemoteModule({
                remoteEntry: 'http://localhost:3003/remoteEntry.js',
                remoteName: 'mfe3',
                exposedModule: './Module3',
              }).then((m: any) => {
                return m.Microfrontend3Module
              }),
          },
        ],
      },
      {
        path: 'task',
        loadChildren: () =>
          import('./task/task.module').then((m) => {
            return m.TaskModule
          }),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
