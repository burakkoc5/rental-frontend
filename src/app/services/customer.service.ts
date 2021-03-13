import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl:string = "https://localhost:44335/api/customers/getcustomerdetails"

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{

    return this.httpClient.get<CustomerResponseModel>(this.apiUrl);

  }
}