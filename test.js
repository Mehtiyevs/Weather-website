const latLonApi = 'e5dfc2cd8aaf908fa65225a7aa9875fb'


fetch(`https://api.openweathermap.org/data/2.5/weather?q=Moscowa&appid=${latLonApi}`)
            .then(resp => resp.json())
            .then(data => {
                        info = {
                        c: data.main.temp - 273.15 + "",
                        humidity: data.main.humidity,
                        name: data.name
                    }   
                    
                    let sliceCels = info.c
                    sliceCels = sliceCels.slice(0,2)

                    console.log(data.weather[0].main)
                }
                    
            )
        