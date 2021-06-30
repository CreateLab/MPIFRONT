import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-fake.service';

@Component({
  selector: 'app-auth-fake',
  templateUrl: './auth-fake.component.html',
  styleUrls: ['./auth-fake.component.css']
})
export class AuthFakeComponent implements OnInit {

  constructor(private _service: AuthService) { }

  ngOnInit(): void {
  }

  authButtonClick(path: string) {
    this._service.getAuth(path).subscribe();
  }

}
