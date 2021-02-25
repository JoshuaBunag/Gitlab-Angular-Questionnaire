import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// --------------------------------------------------------
// PRIMENG
// --------------------------------------------------------
import { OrganizationChartModule } from 'primeng/organizationchart';
// --------------------------------------------------------
// PROJECT CORE
// --------------------------------------------------------
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
// --------------------------------------------------------
// Public Components
// --------------------------------------------------------
import { ImprintComponent } from './public/imprint/imprint.component';
import { DataPrivacyComponent } from './public/data-privacy/data-privacy.component';
import { TreeDemoComponent } from './public/tree-demo/tree-demo.component';
import { SidebarLeftComponent } from './public/tree-demo/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './public/tree-demo/sidebar-right/sidebar-right.component';
import { WorkareaComponent } from './public/tree-demo/workarea/workarea.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ImprintComponent,
    DataPrivacyComponent,
    TreeDemoComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    WorkareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    OrganizationChartModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
