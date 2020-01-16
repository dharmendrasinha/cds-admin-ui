import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CustomerfinancialService {
  constructor(private httpClient: HttpClient) {}

  getAllCustomerFinancials() {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/customerfinancial/getAllCustomerFinancials');
  }
}
