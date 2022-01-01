import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAwsComponent } from './portfolio-aws.component';

describe('PortfolioAwsComponent', () => {
  let component: PortfolioAwsComponent;
  let fixture: ComponentFixture<PortfolioAwsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioAwsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
