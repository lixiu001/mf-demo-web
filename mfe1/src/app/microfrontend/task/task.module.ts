import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { ListComponent } from './list/list.component';
import { TaskContentComponent } from './task-content/task-content.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TaskComponent,
    ListComponent,
    TaskContentComponent,
    DynamicComponentComponent,
    TaskContentComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
