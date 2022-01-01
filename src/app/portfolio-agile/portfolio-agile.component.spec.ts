import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAgileComponent } from './portfolio-agile.component';

describe('PortfolioAgileComponent', () => {
  let component: PortfolioAgileComponent;
  let fixture: ComponentFixture<PortfolioAgileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioAgileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAgileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
