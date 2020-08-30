import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/subscriptions';

@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(`${baseUrl}`);
    }

    getBydId(id) {
        return this.http.get(`${baseUrl}/${id}`);
    }
}
