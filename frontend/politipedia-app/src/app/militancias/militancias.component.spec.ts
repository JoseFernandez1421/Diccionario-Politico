import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitanciasComponent } from './militancias.component';

describe('MilitanciasComponent', () => {
  let component: MilitanciasComponent;
  let fixture: ComponentFixture<MilitanciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilitanciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
