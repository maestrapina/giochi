import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesiGameComponent } from './mesi-game.component';

describe('MesiGameComponent', () => {
  let component: MesiGameComponent;
  let fixture: ComponentFixture<MesiGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesiGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesiGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
