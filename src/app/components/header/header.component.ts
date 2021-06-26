import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {

  Name?:string;
  Status?:string
  constructor(private _headerService: HeaderService) { }

  ngOnInit(): void {
    this._headerService.getUserInfo().subscribe(x=>{
      this.Name = x.name;
      this.Status = x.status
    })
  }

}
