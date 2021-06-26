import { Injectable } from '@angular/core';


@Injectable()
export class GlobalService {
    url = 'http://localhost:5000'
    constructor() { }

    getUrl(path: string) {
        return this.url + '/' + path;
    }
}