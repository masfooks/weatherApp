import { Component, OnInit } from '@angular/core';
import { WeatherData, Period } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private weatherService: WeatherService){}

  weatherData?:WeatherData;
  periods?: Period;
  ngOnInit(): void {
  
    this.weatherService.getWeatherData('mumbai','india').subscribe({
      next: (response)=>{

        this.weatherData = response;
        console.log(response)

        console.log(this.weatherData.response[0].periods[0].avgTempC);
        this.periods = this.weatherData.response[0].periods[0]
        console.log(this.periods);
      }
    })

  }
}
