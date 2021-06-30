import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { IdsModel } from 'src/app/models/IdsModel';
import { Peasant } from 'src/app/models/Peasant';
import { BuyService } from './buy.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
  providers: [BuyService]
})
export class BuyComponent implements OnInit {
  peasants?: Peasant[];
  selectedPeasants?: Peasant[];
  countPeasents?: number;
  pageEvent?: PageEvent;
  constructor(private buyService: BuyService) {
    this.selectedPeasants = new Array<Peasant>();
  }

  onPaginateChange(pageEvent: PageEvent) {
    this.buyService.getPeasantCount().subscribe(c => {
      this.countPeasents = c
      this.buyService.getPeasants(10, pageEvent.pageIndex * 10).subscribe(r => this.peasants = r)
    })
  }

  buyButtonClick() {
    debugger
    var arr = this.selectedPeasants?.map(x => x as Peasant)
    var filtredCollection = arr
      ?.map(s => s.id).filter((x): x is string => x !== undefined) as string[]
      var ids = new IdsModel();
      ids.ids = filtredCollection == undefined ? new Array<string>() : filtredCollection;
    this.buyService.postPeasantsIds(ids)
  }

  ngOnInit(): void {
    this.buyService.getPeasantCount().subscribe(c => {
      this.countPeasents = c
       this.buyService.getPeasants(10, 0).subscribe(r => this.peasants = r)
    })
  }
}