import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeListTableComponent } from './employe-list-table.component';

describe('EmployeListTableComponent', () => {
  let component: EmployeListTableComponent;
  let fixture: ComponentFixture<EmployeListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeListTableComponent]
    });
    fixture = TestBed.createComponent(EmployeListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
