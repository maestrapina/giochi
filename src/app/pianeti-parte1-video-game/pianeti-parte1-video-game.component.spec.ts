import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianetiParte1VideoGameComponent } from './pianeti-parte1-video-game.component';

describe('PianetiParte1VideoGameComponent', () => {
  let component: PianetiParte1VideoGameComponent;
  let fixture: ComponentFixture<PianetiParte1VideoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PianetiParte1VideoGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianetiParte1VideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
