import { Component,ViewChild } from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class containerComponent {
  searchText: string  = ''

  @ViewChild(ProductlistComponent) productListCompanent :ProductlistComponent

  setSearchText(value:string)
  {
this.searchText = value
  }
  
}
