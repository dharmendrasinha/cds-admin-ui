import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AdvpurposetypeService {
  constructor(private httpClient: HttpClient) {}

  getAllPurposeTypes() {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/advancemaintenance/getAllPurposeTypes');
  }
}
