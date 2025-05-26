import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gioco1Component } from './gioco1.component';

describe('Gioco1Component', () => {
  let component: Gioco1Component;
  let fixture: ComponentFixture<Gioco1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gioco1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gioco1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
