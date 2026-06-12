import type {CityDetails, CityWeatherApiResponse} from "../types/types.ts";
import {useEffect, useState} from "react";
import {parseWeatherCode} from "../utils/parseWeatherCode.ts";

type WeatherCardProps = { cityDetails: CityDetails; handleRemoveCity: (id: number) => void }

function WeatherCard({ cityDetails, handleRemoveCity }: WeatherCardProps) {

    const [weather, setWeather] = useState<CityWeatherApiResponse | null>()

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityDetails.latitude}&longitude=${cityDetails.longitude}&current_weather=true`)
            const data: CityWeatherApiResponse = await response.json();
            setWeather(data)
        }
        void fetchWeather()
    }, [cityDetails.updatedAt]);

    return (
        <div className="flex flex-col gap-4 pt-1 px-4 pb-10 border rounded-lg">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <div className="text-xl">{cityDetails.name}</div>
                    <div className="text-sm text-gray-800">{cityDetails.country}</div>
                </div>
                <div onClick={() => handleRemoveCity(cityDetails.id)} className="cursor-pointer">❌</div>
            </div>
            <div className="text-5xl font-bold text-gray-800">{Math.round(weather?.current_weather.temperature ?? 0)} {weather?.current_weather_units.temperature}</div>
            <div className="flex flex-col gap-4">
                <div className="text-gray-800">{parseWeatherCode(weather?.current_weather.weathercode ?? -1).emoji} {parseWeatherCode(weather?.current_weather.weathercode ?? -1).text}</div>
                <div className="flex flex-col border rounded-lg px-4 py-1 text-xs text-center w-1/3">
                    <div>Wind Speed</div>
                    <div>{Math.round(weather?.current_weather.windspeed ?? 0)} {weather?.current_weather_units.windspeed}</div>
                </div>
                <div className="text-sm text-gray-800">Last update at: {cityDetails.updatedAt.toLocaleString()}</div>
            </div>
        </div>
    )
}

export default WeatherCard