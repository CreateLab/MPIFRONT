import { Component, OnInit } from '@angular/core';
import { ArestUser } from 'src/app/models/ArestUser';
import { ArestService } from './arest.service';

@Component({
  selector: 'app-arest',
  templateUrl: './arest.component.html',
  styleUrls: ['./arest.component.css'],
  providers: [ArestComponent]
})
export class ArestComponent implements OnInit {
  arestUser = new ArestUser();
  constructor(private _arestService : ArestService) { }

  ngOnInit(): void {
  }

  arestButtonClick(){
    this._arestService.arestUser(this.arestUser).subscribe()
  }

}
