import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSideTabsComponent } from './portfolio-side-tabs.component';

describe('PortfolioSideTabsComponent', () => {
  let component: PortfolioSideTabsComponent;
  let fixture: ComponentFixture<PortfolioSideTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSideTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSideTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
