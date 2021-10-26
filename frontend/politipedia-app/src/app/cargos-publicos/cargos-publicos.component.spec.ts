import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosPublicosComponent } from './cargos-publicos.component';

describe('CargosPublicosComponent', () => {
  let component: CargosPublicosComponent;
  let fixture: ComponentFixture<CargosPublicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosPublicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosPublicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
