import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peasant } from 'src/app/models/Peasant';
import { GlobalService } from 'src/app/services/global-constant.service';
import { map, catchError } from 'rxjs/operators';
import { IdsModel } from 'src/app/models/IdsModel';

@Injectable()
export class AuthService {

    constructor(private client: HttpClient, private global: GlobalService) { }

   

    getAuth(type:String) {

        return this.client.get<number>(this.global.getUrl('be/'+type), {
            observe: 'response',
            withCredentials: true
        });
    }

 
}