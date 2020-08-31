import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BuildingModel} from '../models/building.model';
import {catchError, tap} from 'rxjs/operators';

const baseUrl = 'http://localhost:3000/api/buildings';

const httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
    providedIn: 'root'
})
export class BuildingService {

    constructor(private http: HttpClient) { }

    getAll() {
        const res = this.http.get<Array<BuildingModel>>(baseUrl);
        console.log(res);
        return res;
    }

    getById(id) {
        return this.http.get<BuildingModel>(`${baseUrl}/${id}`);
    }

    getByName(name) {
        return this.http.get<BuildingModel>(`${baseUrl}?name=${name}`);
    }
}
