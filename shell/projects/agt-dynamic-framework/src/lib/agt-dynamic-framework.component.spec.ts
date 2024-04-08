import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgtDynamicFrameworkComponent } from './agt-dynamic-framework.component';

describe('AgtDynamicFrameworkComponent', () => {
  let component: AgtDynamicFrameworkComponent;
  let fixture: ComponentFixture<AgtDynamicFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgtDynamicFrameworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgtDynamicFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
