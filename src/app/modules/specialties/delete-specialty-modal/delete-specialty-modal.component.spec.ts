import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSpecialtyModalComponent } from './delete-specialty-modal.component';

describe('DeleteSpecialtyModalComponent', () => {
  let component: DeleteSpecialtyModalComponent;
  let fixture: ComponentFixture<DeleteSpecialtyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSpecialtyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSpecialtyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
