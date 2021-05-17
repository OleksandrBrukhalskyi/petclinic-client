import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVisitModalComponent } from './delete-visit-modal.component';

describe('DeleteVisitModalComponent', () => {
  let component: DeleteVisitModalComponent;
  let fixture: ComponentFixture<DeleteVisitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVisitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVisitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
