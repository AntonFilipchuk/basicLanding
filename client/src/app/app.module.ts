import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { FeaturedCompaniesComponent } from './components/featured-companies/featured-companies.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { PlansComponent } from './components/plans/plans.component';
import { GalleryComponent } from './components/gallery/gallery.component';

import { ReactiveFormsModule } from '@angular/forms';

import { GalleryModule } from  'ng-gallery';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ParallaxComponent,
    FeaturedCompaniesComponent,
    GalleryComponent,
    WelcomeComponent,
    QuotesComponent,
    PlansComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    GalleryModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
