import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasPeriodisticasNewComponent } from './notas-periodisticas-new.component';

describe('NotasPeriodisticasNewComponent', () => {
  let component: NotasPeriodisticasNewComponent;
  let fixture: ComponentFixture<NotasPeriodisticasNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasPeriodisticasNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasPeriodisticasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
