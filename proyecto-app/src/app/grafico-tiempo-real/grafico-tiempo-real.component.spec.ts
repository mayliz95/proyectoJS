import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoTiempoRealComponent } from './grafico-tiempo-real.component';

describe('GraficoTiempoRealComponent', () => {
  let component: GraficoTiempoRealComponent;
  let fixture: ComponentFixture<GraficoTiempoRealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoTiempoRealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoTiempoRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
