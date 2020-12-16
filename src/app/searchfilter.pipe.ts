import { Pipe, PipeTransform } from '@angular/core';
import { Fixture } from './models/fixture';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Fixtures: Fixture[], searchvalue: string): Fixture[] {
    
    // if(searchvalue.length>2){
    if(!Fixtures || !searchvalue){
      return Fixtures;
    }

    if(searchvalue.length<=3){
      return Fixtures;
    }
    else{
    return Fixtures.filter(fixture =>
      fixture.homeTeam.name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
      fixture.awayTeam.name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
      fixture.venue.name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) 
      );
    }
    }
  // }

}
