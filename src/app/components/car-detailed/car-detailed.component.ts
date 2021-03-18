import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailedService } from 'src/app/services/car-detailed.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detailed',
  templateUrl: './car-detailed.component.html',
  styleUrls: ['./car-detailed.component.css'],
})
export class CarDetailedComponent implements OnInit {
  dataLoaded: boolean = false;
  carDetails: Car;
  carImages: CarImage[] = [];
  baseImagePath = environment.baseUrl;
  constructor(
    private carDetailedService: CarDetailedService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetail(params['carId']);
        this.getImagesById(params['carId']);
      }
    });
  }

  getCarDetail(carId: number) {
    this.carDetailedService.getCarDetailById(carId).subscribe((response) => {
      this.carDetails = response.data[0];
      this.dataLoaded = true;
    });
  }
  getImagesById(id: number) {
    this.carImageService.getCarImagesById(id).subscribe((response) => {
      this.carImages = response.data;
    });
  }
}
