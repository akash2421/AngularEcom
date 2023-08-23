import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { containerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { ProductlistComponent } from './container/productlist/productlist.component';
import { HeaderRightComponent } from './header/header-right/header-right.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    containerComponent,
    SearchComponent,
    ProductlistComponent,
    HeaderRightComponent,
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
