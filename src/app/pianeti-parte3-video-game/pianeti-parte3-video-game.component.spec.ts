import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianetiParte3VideoGameComponent } from './pianeti-parte3-video-game.component';

describe('PianetiParte3VideoGameComponent', () => {
  let component: PianetiParte3VideoGameComponent;
  let fixture: ComponentFixture<PianetiParte3VideoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PianetiParte3VideoGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianetiParte3VideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
