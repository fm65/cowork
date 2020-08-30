import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/';

@Injectable({
    providedIn: 'root'
})
export class ReservationService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(baseUrl + '/reservations');
    }

    getReservationByRoomId(id) {
        return this.http.get(`${baseUrl}/rooms/reservations?roomId=${id}`);
    }

    create(data) {
        return this.http.post(baseUrl + 'reservations', data);
    }

}
