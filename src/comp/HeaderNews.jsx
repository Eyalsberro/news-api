import React, { useEffect, useState } from 'react'

export default function HeaderNews({ country, setCountry }) {

    const [weather, setWeather] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=israel&units=metric&appid=73ff8b20442fca4d543ac4c788a4849c`)
            const data = await res.json()
            console.log(data);
            setWeather(data)

        })()

    }, [])

    return (
        <div>
            {(typeof weather.main != "undefined") ? (

                <div>
                    <marquee><b>Temp</b> {weather.main.temp} °c</marquee>
                </div>

            ) : ('')}
        </div>
    )
}
