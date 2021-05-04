import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecialtyModalComponent } from './update-specialty-modal.component';

describe('UpdateSpecialtyModalComponent', () => {
  let component: UpdateSpecialtyModalComponent;
  let fixture: ComponentFixture<UpdateSpecialtyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSpecialtyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSpecialtyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
