import { Component,Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductlistComponent } from '../productlist/productlist.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {


@Input() productListComp: ProductlistComponent = undefined
product: Product;

ngOnInit(){    // its a life cycle hook
this.product =this.productListComp.selectedProduct;
}

}
