import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioJavaComponent } from './portfolio-java.component';

describe('PortfolioJavaComponent', () => {
  let component: PortfolioJavaComponent;
  let fixture: ComponentFixture<PortfolioJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioJavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
