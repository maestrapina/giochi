import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianetiParteCompletaVideoGameComponent } from './pianeti-parte-completa-video-game.component';

describe('PianetiParteCompletaVideoGameComponent', () => {
  let component: PianetiParteCompletaVideoGameComponent;
  let fixture: ComponentFixture<PianetiParteCompletaVideoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PianetiParteCompletaVideoGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianetiParteCompletaVideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
