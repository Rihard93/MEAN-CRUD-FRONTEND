import { Component, OnInit } from '@angular/core';

import { WinnerService } from '../shared/winner.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css'],
  providers: [WinnerService]
})
export class WinnerComponent implements OnInit {

  constructor(private winnerService: WinnerService) { }

  ngOnInit() {
  }

}
