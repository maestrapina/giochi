import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndovinaPrimaLetteraGameComponent } from './indovina-prima-lettera-game.component';

describe('IndovinaPrimaLetteraGameComponent', () => {
  let component: IndovinaPrimaLetteraGameComponent;
  let fixture: ComponentFixture<IndovinaPrimaLetteraGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndovinaPrimaLetteraGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndovinaPrimaLetteraGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
