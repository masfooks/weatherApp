export interface WeatherData {
  success: boolean
  error: any
  response: Response[]
}

export interface Response {
  loc: Loc
  interval: string
  periods: Period[]
  profile: Profile
}

export interface Loc {
  long: number
  lat: number
}

export interface Period {
  timestamp: number
  validTime: string
  dateTimeISO: string
  maxTempC: number
  maxTempF: number
  minTempC: number
  minTempF: number
  avgTempC: number
  avgTempF: number
  tempC: any
  tempF: any
  maxFeelslikeC: number
  maxFeelslikeF: number
  minFeelslikeC: number
  minFeelslikeF: number
  avgFeelslikeC: number
  avgFeelslikeF: number
  feelslikeC: number
  feelslikeF: number
  maxDewpointC: number
  maxDewpointF: number
  minDewpointC: number
  minDewpointF: number
  avgDewpointC: number
  avgDewpointF: number
  dewpointC: number
  dewpointF: number
  maxHumidity: number
  minHumidity: number
  humidity: number
  pop: number
  precipMM: number
  precipIN: number
  iceaccum: any
  iceaccumMM: any
  iceaccumIN: any
  snowCM: number
  snowIN: number
  pressureMB: number
  pressureIN: number
  windDir: string
  windDirDEG: number
  windSpeedKTS: number
  windSpeedKPH: number
  windSpeedMPH: number
  windGustKTS: number
  windGustKPH: number
  windGustMPH: number
  windDirMax: string
  windDirMaxDEG: number
  windSpeedMaxKTS: number
  windSpeedMaxKPH: number
  windSpeedMaxMPH: number
  windDirMin: string
  windDirMinDEG: number
  windSpeedMinKTS: number
  windSpeedMinKPH: number
  windSpeedMinMPH: number
  windDir80m: string
  windDir80mDEG: number
  windSpeed80mKTS: number
  windSpeed80mKPH: number
  windSpeed80mMPH: number
  windGust80mKTS: number
  windGust80mKPH: number
  windGust80mMPH: number
  windDirMax80m: string
  windDirMax80mDEG: number
  windSpeedMax80mKTS: number
  windSpeedMax80mKPH: number
  windSpeedMax80mMPH: number
  windDirMin80m: string
  windDirMin80mDEG: number
  windSpeedMin80mKTS: number
  windSpeedMin80mKPH: number
  windSpeedMin80mMPH: number
  sky: number
  cloudsCoded: string
  weather: string
  weatherCoded: WeatherCoded[]
  weatherPrimary: string
  weatherPrimaryCoded: string
  icon: string
  visibilityKM: number
  visibilityMI: number
  uvi?: number
  solradWM2: number
  solradMinWM2: number
  solradMaxWM2: number
  isDay: boolean
  maxCoverage: string
  sunrise: number
  sunset: number
  sunriseISO: string
  sunsetISO: string
}

export interface WeatherCoded {
  timestamp: number
  wx: string
  dateTimeISO: string
}

export interface Profile {
  tz: string
  elevM: number
  elevFT: number
}
