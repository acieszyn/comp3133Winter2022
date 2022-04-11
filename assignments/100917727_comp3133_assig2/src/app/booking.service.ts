import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export interface Booking {
  listing_id: string;
  booking_id: string;
  booking_date: string;
  booking_start: string;
  booking_end: string;
  username: string;
}

export interface Response {
  getBookings: Booking[];
}

@Injectable({
  providedIn: 'root'
})
export class GetBookings extends Query<Response> {
  override document = gql `
  query {
    getBookings {
      listing_id
      booking_id
      booking_start
      booking_end
  }
}
  `;
}
