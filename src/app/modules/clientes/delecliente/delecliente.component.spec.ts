import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleclienteComponent } from './delecliente.component';

describe('DeleclienteComponent', () => {
  let component: DeleclienteComponent;
  let fixture: ComponentFixture<DeleclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
