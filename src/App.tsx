import Header from "./components/Header.tsx";
import Search from "./components/Search.tsx";
import type {CityDetails} from "./types/types.ts";
import {useEffect, useState} from "react";
import WeatherCard from "./components/WeatherCard.tsx";

function App() {

    const [citiesDetails, setCitiesDetails] = useState<CityDetails[]>([])

    const handleAddCity = (cityDetails: CityDetails) => {
        setCitiesDetails((prev) => [...prev, cityDetails])
    }

    const handleRemoveCity = (id: number) => {
        setCitiesDetails(prev => prev.filter((citiesDetail) => citiesDetail.id !== id))
    }

    const addLastUpdatedAtToEveryCity = () => {
        let newCityDetails: CityDetails[] = [...citiesDetails];
        newCityDetails = newCityDetails.map((cityDetails: CityDetails) => ({...cityDetails, updatedAt: new Date() }));
        setCitiesDetails(newCityDetails);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            addLastUpdatedAtToEveryCity()
        }, 15000)

        return () => clearInterval(interval)
    }, [citiesDetails])

    return (
        <div className="flex flex-col gap-9 p-8">
            <Header />
            <Search handleAddCity={handleAddCity} />
            <div className="grid grid-cols-[minmax(220px,1fr)] md:grid-cols-[repeat(2,minmax(220px,1fr))] lg:grid-cols-[repeat(3,minmax(220px,1fr))] gap-8">
                {citiesDetails.map((cityDetails: CityDetails) => (
                    <WeatherCard key={cityDetails.id} cityDetails={cityDetails} handleRemoveCity={handleRemoveCity} />
                ))}
            </div>
        </div>
    )

}

export default App
