import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisitModalComponent } from './update-visit-modal.component';

describe('UpdateVisitModalComponent', () => {
  let component: UpdateVisitModalComponent;
  let fixture: ComponentFixture<UpdateVisitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVisitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVisitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
