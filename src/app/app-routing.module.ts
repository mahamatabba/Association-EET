import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { MembersComponent } from './members/members/members.component';
import { HomeAdminComponent } from './Admin/home-admin/home-admin.component';
import { ShowMembresComponent } from './members/show-membres/show-membres.component';
import { LayoutComponent } from './Admin/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'connexion', component: AdminComponent },
  {path: 'adherez' , component: MembersComponent},
  

    {path: 'admin', 
    component: LayoutComponent,
    children: [
      {path: 'show_membre', component: ShowMembresComponent},
      {path: 'admin', component: HomeAdminComponent}

      
    ]},
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
