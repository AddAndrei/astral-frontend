import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaseOfIllnessComponent } from './add-case-of-illness.component';

describe('AddCaseOfIllnessComponent', () => {
  let component: AddCaseOfIllnessComponent;
  let fixture: ComponentFixture<AddCaseOfIllnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCaseOfIllnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaseOfIllnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
