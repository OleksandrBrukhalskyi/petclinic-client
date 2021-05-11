import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalVetComponent } from './delete-modal-vet.component';

describe('DeleteModalVetComponent', () => {
  let component: DeleteModalVetComponent;
  let fixture: ComponentFixture<DeleteModalVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteModalVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
