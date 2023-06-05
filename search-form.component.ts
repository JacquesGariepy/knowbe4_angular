import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  searchQuery: string = '';

  constructor(private searchService: SearchService) { }

  search(): void {
    if (this.searchQuery.trim()) {
      this.searchService.search(this.searchQuery);
    }
  }
}
