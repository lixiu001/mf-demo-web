import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'remote3';
  ngOnInit(): void {
      console.log('remote3 AppComponent');
  }
  
  ngOnDestroy(): void {
    console.log('remote3 AppComponent ngOnDestroy');
  }
  goToRemote():void {

  }
}
