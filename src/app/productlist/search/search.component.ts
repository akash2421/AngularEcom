import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 searchtext :string = "Mens Ware"

 onInputChange(event: any) {
  this.searchtext = event.target.value

}
}

