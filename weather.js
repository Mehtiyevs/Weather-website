 const latLonApi = 'e5dfc2cd8aaf908fa65225a7aa9875fb'


let getInput = document.getElementById('input').addEventListener('keypress', event => {
    
    let city = document.getElementById('input').value
    if(event.key ==="Enter") {
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${latLonApi}`)
            .then(resp => resp.json())
            .then(data => {
                info = {
                c: data.main.temp - 273.15 + "",
                humidity: data.main.humidity,
                name: data.name
                }   
                    
                let sliceCels = info.c
                sliceCels = sliceCels.slice(0,2)

                    
                document.getElementById('city').innerHTML = info.name
                document.getElementById('celcsium').innerHTML = sliceCels.replace('.','') + '&#8451;' 
                document.getElementById('huminity').innerHTML = info.humidity
                document.getElementById('main').innerHTML = data.weather[0].main
                    
                if(data.weather[0].main === 'Clear') {
                    document.getElementById('gif').src = 'sunny.gif'
                } else if (data.weather[0].main === "Clouds") {
                    document.getElementById('gif').src = 'sunAndCloud.gif'
                } else if (data.weather[0].main === 'Drizzle') {
                    document.getElementById('gif').src = 'rainly.gif'
                } else if (data.weather[0].main === 'Rain' || data.weather[0].main === 'Snow' ) {
                    document.getElementById('gif').src = 'strongRainly.gif'
                } else {
                    document.getElementById('gif').src = 'lightning.gif'
                }                          

            })

            
    }
})








    