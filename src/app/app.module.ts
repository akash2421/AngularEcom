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
import { ProductComponent } from './container/productlist/product/product.component';
import { FilterComponent } from './container/productlist/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { SetBackground } from './CustomDirective/setBackground.directive';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    containerComponent,
    SearchComponent,
    ProductlistComponent,
    HeaderRightComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    SetBackground,
    BannerComponent
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
