import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Booking, GetBookings } from '../booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Observable<Booking[]> | undefined;
  token = localStorage.getItem('token');

  constructor(private getBookings: GetBookings, private router: Router) { }

  ngOnInit(): void {
    if (!this.token)
      this.router.navigate(['/']);

    this.bookings = this.getBookings.watch()
    .valueChanges
    .pipe(
      map(result => result.data.getBookings)
    )
  }

}
