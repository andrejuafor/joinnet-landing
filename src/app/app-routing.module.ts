import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BriefcaseComponent } from './briefcase/briefcase.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ContactComponent } from './contact/contact.component';
import { NetworkComponent } from './network/network.component';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { DataCenterComponent } from './data-center/data-center.component';
import { WirlessComponent } from './wirless/wirless.component';
import { AdminComponent } from './admin/admin.component';
import { SecurityComponent } from './security/security.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'briefcase', component: BriefcaseComponent},
  {path: 'briefcase/networking', component: NetworkComponent},
  {path: 'briefcase/collaboration', component: CollaborationComponent},
  {path: 'briefcase/data_center', component: DataCenterComponent},
  {path: 'briefcase/wirless', component: WirlessComponent},
  {path: 'briefcase/admin_service', component: AdminComponent},
  {path: 'briefcase/security', component: SecurityComponent},
  {path: 'promotions', component: PromotionsComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
