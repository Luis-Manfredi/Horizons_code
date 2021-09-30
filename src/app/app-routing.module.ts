import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CServiceComponent } from './c-service/c-service.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'offers', component:OffersComponent},
  {path:'c-service', component:CServiceComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
