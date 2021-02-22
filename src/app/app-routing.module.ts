import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Public Modules
import { TreeDemoComponent } from './public/tree-demo/tree-demo.component';
import { ImprintComponent } from './public/imprint/imprint.component';
import { DataPrivacyComponent } from './public/data-privacy/data-privacy.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TreeDemoComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-privacy', component: DataPrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
