import {useState, type ChangeEvent, useRef} from "react";
import type {CityDetails, CitySearchApiResponse} from "../types/types.ts";

type SearchProps = { handleAddCity: (cityDetails: CityDetails) => void }

function Search({handleAddCity}: SearchProps) {

    const inputRef = useRef<HTMLInputElement>(null);

    const [results, setResults] = useState<CityDetails[]>([])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchKeyword = e.target.value;

        if (searchKeyword.length < 3) {
            setResults([])
            return;
        }

        const fetchCityDetails = async () => {
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchKeyword}`)
            const data: CitySearchApiResponse = await response.json();
            setResults(data.results);
        }

        fetchCityDetails()
    }

    const handleAddCityClick = (cityDetails: CityDetails)=> {
        handleAddCity({...cityDetails, updatedAt: new Date()})
        if (inputRef.current) inputRef.current.value = ""
        setResults([])
    }

    return (
        <div className="flex flex-col">
            <input ref={inputRef} onChange={handleChange} className="border-2 rounded-lg px-4 py-1 placeholder:text-gray-800 placeholder:text-lg" type="search" placeholder="Search city..."/>
            {results.length > 0 && <div className="border rounded-lg px-4 py-1 cursor-pointer">
                {results.map((cityDetails: CityDetails) => (
                    <div onClick={() => handleAddCityClick(cityDetails)} className="hover:bg-gray-200 rounded-lg p-1" key={cityDetails.id}>{cityDetails.name}, {cityDetails.country}</div>
                ))}
            </div>}
        </div>
    )

}

export default Search