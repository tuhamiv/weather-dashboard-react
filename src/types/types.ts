export type CityDetails = {
    id: number
    name: string
    latitude: number
    longitude: number
    elevation: number
    feature_code: string
    country_code: string
    admin1_id: number
    timezone: string
    population: number
    country_id: number
    country: string
    admin1: string
    updatedAt: Date
}

export type CitySearchApiResponse = {
    results: CityDetails[]
}

type CurrentWeatherUnits = {
    time: string
    interval: string
    temperature: string
    windspeed: string
    winddirection: string
    is_day: string
    weathercode: string
}

type CurrentWeather = {
    time: string
    interval: number
    temperature: number
    windspeed: number
    winddirection: number
    is_day: number
    weathercode: number
}

export type CityWeatherApiResponse = {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    current_weather_units: CurrentWeatherUnits
    current_weather: CurrentWeather
}