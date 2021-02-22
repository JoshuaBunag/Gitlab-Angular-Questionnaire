import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// --------------------------------------------------------
// CORE
// --------------------------------------------------------
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
// --------------------------------------------------------
// Public Components
// --------------------------------------------------------
import { ImprintComponent } from './public/imprint/imprint.component';
import { DataPrivacyComponent } from './public/data-privacy/data-privacy.component';
import { TreeDemoComponent } from './public/tree-demo/tree-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ImprintComponent,
    DataPrivacyComponent,
    TreeDemoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
