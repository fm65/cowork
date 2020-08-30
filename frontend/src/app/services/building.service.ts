import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/';

@Injectable({
    providedIn: 'root'
})
export class BuildingService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(baseUrl + '/buildings');
    }

    getById(id) {
        return this.http.get(`${baseUrl}/buildings/${id}`);
    }

    getByName(name) {
        return this.http.get(`${baseUrl}/building?name=${name}`);
    }
}
