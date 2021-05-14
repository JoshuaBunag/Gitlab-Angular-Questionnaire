import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// --------------------------------------------------------
// PRIME NG
// --------------------------------------------------------
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ListboxModule } from 'primeng/listbox';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { DragDropModule } from 'primeng/dragdrop';
import { MenubarModule } from 'primeng/menubar';
import {SliderModule} from 'primeng/slider';
import {InputNumberModule} from 'primeng/inputnumber';
import {SelectButtonModule} from 'primeng/selectbutton';




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
import { NodeScenarioComponent } from './public/tree-demo/workarea/node-scenario/node-scenario.component';
import { NodeRuleComponent } from './public/tree-demo/workarea/node-rule/node-rule.component';
import { NodeNewDialogComponent } from './public/tree-demo/workarea/node-new-dialog/node-new-dialog.component';
import { QuestionnaireComponent } from './public/questionnaire/questionnaire.component';

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
    NodeScenarioComponent,
    NodeRuleComponent,
    NodeNewDialogComponent,
    QuestionnaireComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    OrganizationChartModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    ListboxModule,
    ContextMenuModule,
    HttpClientModule,
    ScrollPanelModule,
    DialogModule,
    InputTextModule,
    ProgressSpinnerModule,
    CalendarModule,
    SliderModule,
    InputNumberModule,
    SelectButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
