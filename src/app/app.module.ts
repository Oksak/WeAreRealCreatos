import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { SectionBlogComponent } from './section-blog/section-blog.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    PortfolioSectionComponent,
    LandingSectionComponent,
    FormSectionComponent,
    SectionBlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
