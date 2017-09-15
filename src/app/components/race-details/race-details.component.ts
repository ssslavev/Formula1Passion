import { Component, OnInit } from '@angular/core';
import { RacesService } from '../../services/races.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {

  race: any;
  constructor(private racesService: RacesService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.racesService.getById(id).subscribe((data) => {
        this.race = data;
      });

    });
  }
}
