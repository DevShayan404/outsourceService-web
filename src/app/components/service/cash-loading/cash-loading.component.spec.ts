import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashLoadingComponent } from './cash-loading.component';

describe('CashLoadingComponent', () => {
  let component: CashLoadingComponent;
  let fixture: ComponentFixture<CashLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
