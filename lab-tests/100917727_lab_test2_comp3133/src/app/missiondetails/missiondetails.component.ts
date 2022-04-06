import { Component, OnInit, Input } from '@angular/core';
import { Root2 } from '../model/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  @Input() missionName: string = '';
  @Input() launchYear: string = '';
  @Input() rocketName: string = '';
  @Input() rocketType: string = '';
  @Input() launchSite: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
