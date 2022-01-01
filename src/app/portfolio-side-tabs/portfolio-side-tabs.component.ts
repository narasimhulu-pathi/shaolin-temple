import { Component, OnInit } from '@angular/core';
import { PORTFOLIO_ROUTES } from '../interfaces/route.constants';

@Component({
  selector: 'app-portfolio-side-tabs',
  templateUrl: './portfolio-side-tabs.component.html',
  styleUrls: ['./portfolio-side-tabs.component.css']
})
export class PortfolioSideTabsComponent implements OnInit {

  portfolios = PORTFOLIO_ROUTES;
  activeTab = '';
  constructor() { }

  ngOnInit(): void {
  }

}
