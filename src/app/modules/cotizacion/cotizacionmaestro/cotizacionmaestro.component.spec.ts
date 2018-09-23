import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionmaestroComponent } from './cotizacionmaestro.component';

describe('CotizacionmaestroComponent', () => {
  let component: CotizacionmaestroComponent;
  let fixture: ComponentFixture<CotizacionmaestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionmaestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionmaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
