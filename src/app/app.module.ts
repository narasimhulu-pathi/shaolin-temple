import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HomeComponent } from './home/home.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { VisionComponent } from './vision/vision.component';
import { MissionComponent } from './mission/mission.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioSideTabsComponent } from './portfolio-side-tabs/portfolio-side-tabs.component';
import { PortfolioAngularComponent } from './portfolio-angular/portfolio-angular.component';
import { PortfolioAgileComponent } from './portfolio-agile/portfolio-agile.component';
import { PortfolioJavaComponent } from './portfolio-java/portfolio-java.component';
import { PortfolioPythonComponent } from './portfolio-python/portfolio-python.component';
import { PortfolioAwsComponent } from './portfolio-aws/portfolio-aws.component';
import { ContentRightComponent } from './content-right/content-right.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HomeComponent,
    PortfoliosComponent,
    VisionComponent,
    MissionComponent,
    ContactUsComponent,
    PortfolioSideTabsComponent,
    PortfolioAngularComponent,
    PortfolioAgileComponent,
    PortfolioJavaComponent,
    PortfolioPythonComponent,
    PortfolioAwsComponent,
    ContentRightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
