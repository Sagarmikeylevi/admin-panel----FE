import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeListHeaderComponent } from './employe-list-header.component';

describe('EmployeListHeaderComponent', () => {
  let component: EmployeListHeaderComponent;
  let fixture: ComponentFixture<EmployeListHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeListHeaderComponent]
    });
    fixture = TestBed.createComponent(EmployeListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
