import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input('college') school_name: string = '';
  @Input('city') city: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  

}
