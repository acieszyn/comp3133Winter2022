import { Injectable } from '@angular/core';
import { Query, gql, TypedDocumentNode } from 'apollo-angular';
import { EmptyObject } from 'apollo-angular/types';
import { DocumentNode } from 'graphql';

export interface Listings {
  listing_id: string
  listing_title: string
  description: string
  street: string
  city: string
  postal_code: string
  price: number
  email: string
  username: string
}

export interface Response {
  getListings: Listings[];
}

@Injectable({
  providedIn: 'root'
})
export class AllListings extends Query<Response> {
  override document = gql `
    query {
      getListings {
        listing_id
        listing_title
        description
        street
        city
        postal_code
        price
        email
        username
      }
    }
  `;
}

@Injectable({
  providedIn: 'root'
})
export class ListingByCity extends Query<Response>
{
  override document = gql `
  query getListingsByCity($city: String!)
  {
    getListings: getListingsByCity(city: $city)
    {
      listing_id
      listing_title
      description
      street
      city
      postal_code
      price
      email
      username
    }
  }
  `
}
