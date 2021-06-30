import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peasant } from 'src/app/models/Peasant';
import { GlobalService } from 'src/app/services/global-constant.service';
import { map, catchError } from 'rxjs/operators';
import { IdsModel } from 'src/app/models/IdsModel';

@Injectable()
export class BuyService {

    constructor(private client: HttpClient, private global: GlobalService) { }

    getPeasants(takeParam: number, skipParam: number) {

        return this.client.get<Peasant[]>(this.global.getUrl('GetPeasants'), {
            params: {
                take: takeParam,
                skip: skipParam
            },
            observe: 'response',
            withCredentials: true
        }).pipe(map(p => p.body == undefined ? new Array<Peasant>() : p.body));

    }

    getPeasantCount() {

        return this.client.get<number>(this.global.getUrl('GetCountPeasants'), {
            observe: 'response'
            ,
            withCredentials: true
        }).pipe(map(p => p.body == undefined ? 0 : p.body));
    }

    postPeasantsIds(ids: IdsModel) {
        return this.client.post(this.global.getUrl('PostPeasantsIds'), ids, {

            withCredentials: true
        })
    }
}