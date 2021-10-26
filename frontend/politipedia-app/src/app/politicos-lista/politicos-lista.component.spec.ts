import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticosListaComponent } from './politicos-lista.component';

describe('PoliticosListaComponent', () => {
  let component: PoliticosListaComponent;
  let fixture: ComponentFixture<PoliticosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
