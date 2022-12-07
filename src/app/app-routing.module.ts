import { TelevisionComponent } from './products/television/television.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { ComputerComponent } from './products/computer/computer.component';
import { TabletComponent } from './products/tablet/tablet.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent, children:[
    { path: '', component: ProductsComponent },
    { path: 'laptop', component: LaptopComponent },
    { path: 'mobile', component: MobileComponent },
    { path: 'tablet', component: TabletComponent },
    { path: 'computer', component: ComputerComponent },
    { path: 'television', component: TelevisionComponent },
    { path: 'washing-machine', component: WashingMachineComponent }
  ] },
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
