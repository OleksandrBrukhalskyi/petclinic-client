import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePetModalComponent } from './update-pet-modal.component';

describe('UpdatePetModalComponent', () => {
  let component: UpdatePetModalComponent;
  let fixture: ComponentFixture<UpdatePetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePetModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
