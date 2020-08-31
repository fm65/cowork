import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BuildingModel} from '../models/building.model';

const baseUrl = 'http://localhost:3000/api/buildings';

@Injectable({
    providedIn: 'root'
})
export class BuildingService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Array<BuildingModel>>(baseUrl);
    }

    getById(id) {
        return this.http.get<BuildingModel>(`${baseUrl}/${id}`);
    }

    getByName(name) {
        return this.http.get<BuildingModel>(`${baseUrl}?name=${name}`);
    }
}
