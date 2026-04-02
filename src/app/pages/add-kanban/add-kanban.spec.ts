import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKanban } from './add-kanban';

describe('AddKanban', () => {
  let component: AddKanban;
  let fixture: ComponentFixture<AddKanban>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddKanban]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddKanban);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
