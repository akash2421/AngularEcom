import { Component,EventEmitter,Output ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 searchtext :string = ""

 @Output()
 searchTextChange: EventEmitter<string> = new EventEmitter<string>()

 @ViewChild("searchInput") serachInputEl: ElementRef



 updateInputChange() {
  //this.searchtext = event.target.value
this.searchtext= this.serachInputEl.nativeElement.value
this.searchTextChange.emit(this.searchtext)

}
}

