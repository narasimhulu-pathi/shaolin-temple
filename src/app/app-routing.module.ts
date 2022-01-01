import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MissionComponent } from './mission/mission.component';
import { VisionComponent } from './vision/vision.component';
import { PortfolioAngularComponent } from './portfolio-angular/portfolio-angular.component';
import { PortfolioAgileComponent } from './portfolio-agile/portfolio-agile.component';
import { PortfolioAwsComponent } from './portfolio-aws/portfolio-aws.component';
import { PortfolioJavaComponent } from './portfolio-java/portfolio-java.component';
import { PortfolioPythonComponent } from './portfolio-python/portfolio-python.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'portfolios', component: PortfoliosComponent,
    children: [
      {
        path: 'angular', component: PortfolioAngularComponent
      },
      {
        path: 'agile', component: PortfolioAgileComponent
      },
      {
        path: 'java', component: PortfolioJavaComponent
      },
      {
        path: 'python', component: PortfolioPythonComponent
      },
      {
        path: 'aws', component: PortfolioAwsComponent
      }
    ]
  },
  { path: 'vision', component: VisionComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
