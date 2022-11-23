import { MyContainerComponent } from './myContainer/myContainer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
