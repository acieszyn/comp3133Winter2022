import { Component, OnInit } from '@angular/core';
import { Root2 } from '../model/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
  providers: [SpacexapiService]
})

export class MissionlistComponent implements OnInit {

  missionList: Root2[] = [];
  currentMission: Partial<Root2> = {};

  constructor(private spaceXAPI: SpacexapiService) { }

  ngOnInit(): void {
    this.spaceXAPI.getMissions()
      .subscribe(Root2 => this.missionList = Root2);
  }

  showDetails(mission: Root2) {
    this.currentMission = mission;
  }
}
