import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class MergertransferService {
  constructor(private httpClient: HttpClient) {}

  getMergers(customerId) {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/merger/searchMerger/1/' + customerId);
  }

  getTransfers(customerId) {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/transfer/searchTransfer/1/' + customerId);
  }

  getAllCustomers() {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/merger/getAllCustomers');
  }

  getNotesByCustomerFrom(customerId, systemId) {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/merger/getNotesByCustomerFrom?customerId=' + customerId + '&systemId=' + systemId);
  }

  getNotesByCustomerTo(customerId, systemId) {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/merger/getNotesByCustomerTo?customerId=' + customerId + '&systemId=' + systemId);
  }
}
