import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { LoginComponent } from './login/login.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TabletComponent } from './products/tablet/tablet.component';
import { ComputerComponent } from './products/computer/computer.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { TelevisionComponent } from './products/television/television.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Card2Component } from './card2/card2.component';
import { Card1Component } from './card1/card1.component';
import { DesignutilityService } from './appServices/designutility.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { TestdirectiveDirective } from './appDirectives/testdirective.directive';

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
    ProductsComponent,
    LoginComponent,
    PageNotfoundComponent,
    LaptopComponent,
    MobileComponent,
    TabletComponent,
    ComputerComponent,
    WashingMachineComponent,
    TelevisionComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Card2Component,
    Card1Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    TestdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    DesignutilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
