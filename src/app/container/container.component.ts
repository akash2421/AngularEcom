import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class containerComponent {
  addToCart: number = 0;
  Posted = ""
  product = {
    pname: "iphone",
    price: 400000,
    color: "red",
    discount: 5,
    stock: 9,
    pimage: "/assets/Images/iphone.jpg"
  }
  decressCartValue()
  {
    if(this.addToCart <= 0)
    {
    this.addToCart = 0;}
    else{
      this.addToCart--;
    }

  }
  increaseCartValue()
  {
    if(this.addToCart <  this.product.stock)  // 9 = 9
{

     this.addToCart++
   
}
    
   
  }

  getDiscountPrice() {
    return (this.product.price * this.product.discount / 100)
  }
 
}
