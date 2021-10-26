import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasPeriodisticasComponent } from './notas-periodisticas.component';

describe('NotasPeriodisticasComponent', () => {
  let component: NotasPeriodisticasComponent;
  let fixture: ComponentFixture<NotasPeriodisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasPeriodisticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasPeriodisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
