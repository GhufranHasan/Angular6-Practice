import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Txtsec1Component } from './myContainer/txtsec1/txtsec1.component';
import { Txtsec2Component } from './myContainer/txtsec2/txtsec2.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './databind/class-style/class-style.component';
import { EventbindComponent } from './databind/eventbind/eventbind.component';
import { TwoWayComponent } from './databind/two-way/two-way.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Txtsec1Component,
    Txtsec2Component,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayComponent,
    NgifComponent,
    NgSwitchComponent,
    NgForComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
