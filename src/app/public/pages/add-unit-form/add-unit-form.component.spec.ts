import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnitFormComponent } from './add-unit-form.component';

describe('AddUnitFormComponent', () => {
  let component: AddUnitFormComponent;
  let fixture: ComponentFixture<AddUnitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUnitFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUnitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
