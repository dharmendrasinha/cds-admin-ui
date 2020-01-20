import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  // getMergers(customerId) {
  //   return this.httpClient.get(BUSINESS_SERVICE_URL + '/merger/searchMerger/1/' + customerId);
  // }

  getAllMergerCustomers() {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/merger/getAllCustomers');
  }

  // getTransfers() {
  //   return this.httpClient.get(BUSINESS_SERVICE_URL + '/transfer/searchTransfer/1/1');
  // }

  getAllTransferCustomers() {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/transfer/getAllCustomers');
  }

  getMergers(customerId) {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/merger/searchMerger/1/' + customerId);
  }

  getTransfers(customerId) {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/transfer/searchTransfer/1/' + customerId);
  }
}
