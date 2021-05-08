import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOwnerDeleteComponent } from './modal-owner-delete.component';

describe('ModalOwnerDeleteComponent', () => {
  let component: ModalOwnerDeleteComponent;
  let fixture: ComponentFixture<ModalOwnerDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOwnerDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOwnerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
