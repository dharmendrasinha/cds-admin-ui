import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BUSINESS_SERVICE_URL } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class MergertransferService {
  constructor(private httpClient: HttpClient) {}

  // Merger services

  getMergers(customerId) {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/merger/searchMerger/1/' + customerId);
  }

  getAllMergerCustomers() {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/merger/getAllCustomers');
  }

  getMergerNotesByCustomerFrom(customerId, systemId) {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/merger/getNotesByCustomerFrom?customerId=' + customerId + '&systemId=' + systemId);
  }

  getMergerNotesByCustomerTo(customerId, systemId) {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/merger/getNotesByCustomerTo?customerId=' + customerId + '&systemId=' + systemId);
  }

  // Transfer services

  getTransfers(customerId) {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/transfer/searchTransfer/1/' + customerId);
  }

  getAllTransferCustomers() {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/transfer/getAllCustomers');
  }

  getTransferNotesByCustomerFrom(customerId, systemId) {
    return this.httpClient.get(
      BUSINESS_SERVICE_URL + '/transfer/getNotesByCustomerFrom?customerId=' + customerId + '&systemId=' + systemId
    );
  }

  getTransferNotesByCustomerTo(customerId, systemId) {
    return this.httpClient.get(BUSINESS_SERVICE_URL + '/transfer/getNotesByCustomerTo?customerId=' + customerId + '&systemId=' + systemId);
  }
}
