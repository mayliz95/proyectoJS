import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionDispositivoComponent } from './administracion-dispositivo.component';

describe('AdministracionDispositivoComponent', () => {
  let component: AdministracionDispositivoComponent;
  let fixture: ComponentFixture<AdministracionDispositivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionDispositivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
