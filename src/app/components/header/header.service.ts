import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/models/User";
import { GlobalService } from "src/app/services/global-constant.service";
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HeaderService {

    constructor(private client: HttpClient, private global: GlobalService) { }

    getUserInfo() {

        return this.client.get<User>(this.global.getUrl('GetUserInfo'), {
            observe: 'response'
            ,
            withCredentials: true
        }).pipe(map(p => p.body == undefined ? new User() : p.body));
    }
}