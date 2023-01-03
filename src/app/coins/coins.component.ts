import { Component } from '@angular/core';
import { CoinDataService } from '../coin-data.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent {

 constructor(private coinService: CoinDataService){}

}
