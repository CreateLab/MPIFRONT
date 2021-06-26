import { Component, OnInit } from '@angular/core';
import { Peasant } from 'src/app/models/Peasant';
import { SellService } from './sell.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
  providers: [SellService]
})
export class SellComponent implements OnInit {

  peasant = new Peasant;
  constructor(private _sellService:SellService) { }

  ngOnInit(): void {
  }

  sellPeasantClick() {
    this._sellService.sellPeasant(this.peasant).subscribe()
  }

}
