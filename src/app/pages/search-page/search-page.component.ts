import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Fixture } from 'src/app/models/fixture';
import { Observable } from 'rxjs';
import { FixturesService } from 'src/app/services/fixtures.service';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchResults$: Observable<Fixture[]>;

  searchField = new FormControl();

  displayedColumns: string[] = ['fixtureName', 'kickoff', 'venue'];

  constructor(private fixturesService: FixturesService,  private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    // if(this.searchField.value.length>4){
      this.spinnerService.show();
    this.searchResults$ = this.searchField.valueChanges.pipe(
      switchMap(val => this.fixturesService.getFixtures(val))
    );
    this.spinnerService.hide();
  // }
  }

  hometeam(element){
    return element.homeTeam.colour;
  }

  awayteam(element){
    return element.awayTeam.colour;
  }

}
