import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianetiGameComponent } from './pianeti-game.component';

describe('PianetiGameComponent', () => {
  let component: PianetiGameComponent;
  let fixture: ComponentFixture<PianetiGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PianetiGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianetiGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
