import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndPlaygroundComponent } from './dnd-playground.component';

describe('DndPlaygroundComponent', () => {
  let component: DndPlaygroundComponent;
  let fixture: ComponentFixture<DndPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndPlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DndPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
