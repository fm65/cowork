import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/';

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    constructor(private http: HttpClient) { }

    getAllByBuildingId(id) {
        return this.http.get(`${baseUrl}rooms/?buildingId=${id}`);
    }

    getByNameAndId(name, id) {
        return this.http.get(`${baseUrl}building?name=${name}?buildingId=${id}`);
    }

    create(data) {
        return this.http.post(baseUrl + 'rooms', data);
    }
}
