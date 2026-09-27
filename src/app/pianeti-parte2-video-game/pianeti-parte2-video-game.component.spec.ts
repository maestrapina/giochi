import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianetiParte2VideoGameComponent } from './pianeti-parte2-video-game.component';

describe('PianetiParte2VideoGameComponent', () => {
  let component: PianetiParte2VideoGameComponent;
  let fixture: ComponentFixture<PianetiParte2VideoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PianetiParte2VideoGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianetiParte2VideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
