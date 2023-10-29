import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFaturamentoComponent } from './cadastro-faturamento.component';

describe('CadastroFaturamentoComponent', () => {
  let component: CadastroFaturamentoComponent;
  let fixture: ComponentFixture<CadastroFaturamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroFaturamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroFaturamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
