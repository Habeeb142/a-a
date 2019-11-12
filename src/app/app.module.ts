import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarAddressComponent } from './navbar-address/navbar-address.component';
import { KnownForComponent } from './known-for/known-for.component';
import { LittleAboutUsComponent } from './little-about-us/little-about-us.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { FooterComponent } from './footer/footer.component';
import { ConstitutionalLawComponent } from './constitutional-law/constitutional-law.component';
import { CivilLawComponent } from './civil-law/civil-law.component';
import { TrustComponent } from './trust/trust.component';
import { CriminalLawComponent } from './criminal-law/criminal-law.component';
import { AdministrationLawComponent } from './administration-law/administration-law.component';
import { CoporateLawComponent } from './coporate-law/coporate-law.component';
import { ElectionPetitionComponent } from './election-petition/election-petition.component';
import { LabourLawComponent } from './labour-law/labour-law.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,
    HomeComponent,
    NavbarComponent,
    NavbarAddressComponent,
    KnownForComponent,
    LittleAboutUsComponent,
    ExpertiseComponent,
    FooterComponent,
    ConstitutionalLawComponent,
    CivilLawComponent,
    TrustComponent,
    CriminalLawComponent,
    AdministrationLawComponent,
    CoporateLawComponent,
    ElectionPetitionComponent,
    LabourLawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
