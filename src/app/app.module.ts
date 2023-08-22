import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HedaerRightComponent } from './header/hedaer-right/hedaer-right.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SearchComponent } from './productlist/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    HedaerRightComponent,
    ProductlistComponent,
    SearchComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
