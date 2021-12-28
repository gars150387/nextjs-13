// let http = new XMLHttpRequest()
let cityName = ''
let apiKey = "750f844a271e6a0e4d5caf0107a40189"
let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName +'&units=metric&appid=' + apiKey;

const getState = () =>{
    return {
        // store: {

        // },
        actions: {
            addCityName(cityName){
               fetch(url, {
                   method: "GET",
                   header: {"content-type": "a[pplication/json"},
                   body: JSON.stringify({
                       cityName: cityName
                   })
               }).then(response => response.json())

            }
        }
    }
}

export default getState