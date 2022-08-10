import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(lon: number, lat: number):Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(
          environment.XRapidApiKeyHeaderName,
          environment.XRapidApiKeyHeaderValue
        ),
      params: new HttpParams()
        .set('lon', lon)
        .set('lat', lat)
        .set('units', 'metric')
        .set('lang', 'en'),
    });
  }
}
