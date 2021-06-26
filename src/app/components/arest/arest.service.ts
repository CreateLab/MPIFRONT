import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/models/User";
import { GlobalService } from "src/app/services/global-constant.service";
import { map, catchError } from 'rxjs/operators';
import { ArestUser } from "src/app/models/ArestUser";

@Injectable()
export class ArestService {

    constructor(private client: HttpClient, private global: GlobalService) { }

    arestUser(user: ArestUser) {

        return this.client.post<boolean>(this.global.getUrl('PostArestUser'), user, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }
}