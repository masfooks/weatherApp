import { Component, OnInit } from '@angular/core';
import {
  CurrentCondition,
  Data,
  Hourly,
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

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(this.weatherData);

        this.mainWeather = this.weatherData.data.weather[0];
        console.log(this.mainWeather.maxtempC)
        
        this.mainHrTemp = this.mainWeather.hourly[0];
        console.log(this.mainHrTemp.tempC);

        this.currentCondition = this.weatherData.data.current_condition[0];

        console.log(this.currentCondition.temp_C);

        // console.log(this.mainWeather);
      },
    });
  }
}
