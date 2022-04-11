import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AllListings, Listings, ListingByCity } from '../listing.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings: Observable<Listings[]> | undefined;
  query: string = '';

  constructor(private allListings: AllListings, private listingByCity: ListingByCity) { }

  ngOnInit(): void {
    this.listings = this.allListings.watch()
    .valueChanges
    .pipe(
      map(result => result.data.getListings)
    );
  }

  search() {
    if(!this.query)
      this.ngOnInit();
    else
      this.listings = this.listingByCity.watch({city: this.query})
      .valueChanges
      .pipe(
        map(result => result.data.getListings)
    )
  }
}
