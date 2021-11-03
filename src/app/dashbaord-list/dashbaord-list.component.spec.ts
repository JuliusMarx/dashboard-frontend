import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaordListComponent } from './dashbaord-list.component';

describe('DashbaordListComponent', () => {
  let component: DashbaordListComponent;
  let fixture: ComponentFixture<DashbaordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbaordListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbaordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
