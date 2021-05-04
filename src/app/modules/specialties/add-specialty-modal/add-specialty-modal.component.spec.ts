import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialtyModalComponent } from './add-specialty-modal.component';

describe('AddSpecialtyModalComponent', () => {
  let component: AddSpecialtyModalComponent;
  let fixture: ComponentFixture<AddSpecialtyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpecialtyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpecialtyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
