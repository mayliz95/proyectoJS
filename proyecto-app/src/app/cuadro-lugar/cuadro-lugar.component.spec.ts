import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroLugarComponent } from './cuadro-lugar.component';

describe('CuadroLugarComponent', () => {
  let component: CuadroLugarComponent;
  let fixture: ComponentFixture<CuadroLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadroLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
