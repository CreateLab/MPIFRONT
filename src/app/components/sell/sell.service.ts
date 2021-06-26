import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/models/User";
import { GlobalService } from "src/app/services/global-constant.service";
import { map, catchError } from 'rxjs/operators';
import { Peasant } from "src/app/models/Peasant";

@Injectable()
export class SellService {

    constructor(private client: HttpClient, private global: GlobalService) { }

    sellPeasant(peasant: Peasant) {

        return this.client.post(this.global.getUrl('PostSellPeasants'), peasant, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }
}