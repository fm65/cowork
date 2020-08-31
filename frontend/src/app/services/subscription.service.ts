import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SubscriptionModel} from '../models/subscription.model';

const baseUrl = 'http://localhost:3000/api/subscriptions';

@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Array<SubscriptionModel>>(`${baseUrl}`);
    }

    getBydId(id) {
        return this.http.get<SubscriptionModel>(`${baseUrl}/${id}`);
    }
}
