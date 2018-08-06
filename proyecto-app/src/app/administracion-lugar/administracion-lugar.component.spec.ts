import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionLugarComponent } from './administracion-lugar.component';

describe('AdministracionLugarComponent', () => {
  let component: AdministracionLugarComponent;
  let fixture: ComponentFixture<AdministracionLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
