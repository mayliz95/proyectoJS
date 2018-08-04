import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionTipoLugarComponent } from './administracion-tipo-lugar.component';

describe('AdministracionTipoLugarComponent', () => {
  let component: AdministracionTipoLugarComponent;
  let fixture: ComponentFixture<AdministracionTipoLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionTipoLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionTipoLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
