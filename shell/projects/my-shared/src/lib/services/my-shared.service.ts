import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class MySharedService {
  private data: any

  constructor() {}

  public setData(value: any) {
    console.log('value', value)
    this.data = value
  }

  public getData() {
    return this.data
  }
}
