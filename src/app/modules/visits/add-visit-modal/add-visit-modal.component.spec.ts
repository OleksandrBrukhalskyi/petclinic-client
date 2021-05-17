import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitModalComponent } from './add-visit-modal.component';

describe('AddVisitModalComponent', () => {
  let component: AddVisitModalComponent;
  let fixture: ComponentFixture<AddVisitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVisitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
