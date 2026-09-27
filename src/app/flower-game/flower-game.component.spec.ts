import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerGameComponent } from './flower-game.component';

describe('FlowerGameComponent', () => {
  let component: FlowerGameComponent;
  let fixture: ComponentFixture<FlowerGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
