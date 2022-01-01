import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAngularComponent } from './portfolio-angular.component';

describe('PortfolioAngularComponent', () => {
  let component: PortfolioAngularComponent;
  let fixture: ComponentFixture<PortfolioAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
