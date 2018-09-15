import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientesComponent } from './editclientes.component';

describe('EditComponent', () => {
  let component: EditClientesComponent;
  let fixture: ComponentFixture<EditClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
