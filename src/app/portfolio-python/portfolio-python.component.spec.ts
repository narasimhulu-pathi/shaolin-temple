import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPythonComponent } from './portfolio-python.component';

describe('PortfolioPythonComponent', () => {
  let component: PortfolioPythonComponent;
  let fixture: ComponentFixture<PortfolioPythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioPythonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
