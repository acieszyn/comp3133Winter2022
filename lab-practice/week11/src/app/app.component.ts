import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  college_name = 'George Brown College';
  city = 'Toronto';
  isDisplay = true;

  constructor(private dataService: DataService){
    this.getUserData();
  }

  getUserData() {
    this.dataService.getAllUsers().subscribe(response => {
      console.log(response);
    });
  }
}
