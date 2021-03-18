import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
;
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailedService {

  constructor(private httpClient: HttpClient) {}
  getCarDetailById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath =environment.apiUrl+"cars/getcardetailsbyid?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}
