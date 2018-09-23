import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizaciondetalleComponent } from './cotizaciondetalle.component';

describe('CotizaciondetalleComponent', () => {
  let component: CotizaciondetalleComponent;
  let fixture: ComponentFixture<CotizaciondetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizaciondetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizaciondetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
