import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleItemComponent } from './rectangle-item.component';

describe('RectangleItemComponent', () => {
  let component: RectangleItemComponent;
  let fixture: ComponentFixture<RectangleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectangleItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
