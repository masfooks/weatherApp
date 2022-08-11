import { Component, OnInit } from '@angular/core';
import {
  CurrentCondition,
  Data,
  Hourly,
  Request,
  Weather,
  WeatherData,
} from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  cityName: string = 'Mumbai';
  weatherData?: WeatherData;
  mainWeather?: Weather;
  mainHrTemp?: Hourly;
  currentCondition?: CurrentCondition;
  defaultCity?:Request
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        this.mainWeather = this.weatherData.data.weather[0];
        this.mainHrTemp = this.mainWeather.hourly[0];
        this.currentCondition = this.weatherData.data.current_condition[0];
        this.defaultCity = this.weatherData.data.request[0]
        console.log(this.defaultCity.query)

        console.log(this.mainHrTemp.tempC);
        console.log(this.weatherData);
        console.log(this.mainWeather.maxtempC);
        console.log(this.currentCondition.temp_C);

        // console.log(this.mainWeather);
      },
    });
  }
}
