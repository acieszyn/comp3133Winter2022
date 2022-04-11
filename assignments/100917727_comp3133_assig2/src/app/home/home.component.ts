import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token = localStorage.getItem('token');

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.token = '';
    window.location.reload();
  }
}
