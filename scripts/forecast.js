//#99 Project Preview & Setup
//#100 HTML & CSS Template
//#101 AccuWeather API      key: 3RHb2BhshzIWidBzVVB255b7zWi0QpAI
//#102 Get City API Call
//resource data http://dataservice.accuweather.com/locations/v1/cities/search
//city key:  328226
//#103 Get Weather API Call        Key: "328226"
//#104 Updating the Location
//#105 Object Shorthand Notation
//#106 Updating the UI
//#107 Destructuring
//#108 Weather Icons & images
//#109 Ternary Operator
//Return from section 15 #125 to #126 and apply oojs to rocoWeather to complete the project

class Forecast{
    constructor(){
        this.key= '3RHb2BhshzIWidBzVVB255b7zWi0QpAI';
        this.weatherURI= 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI= 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){             //copy code from app and add .this
        const cityDets= await this.getCity(city);   
        const weather= await this.getWeather(cityDets.Key);
        return{cityDets, weather};
}
    async getWeather(id){
    //const base= 'http://dataservice.accuweather.com/currentconditions/v1/';       //again already coded above
        const query= `${id}?apikey= ${this.key}`;       //again add .this to key
        const response= await fetch(this.weatherURI + query);       //this.weatherURI instead of base
        const data= await response.json();    
        return data[0];  

}
    async getCity(city){                //copy code from const getCity=  below
        //const base= 'http://dataservice.accuweather.com/locations/v1/cities/search'; //this copied code is already shown above
        const query= `?apikey= ${this.key}&q=${city}`;    //add .this to copied code       
        const response= await fetch(this.cityURI + query);            //base changed to this.cityURI
        const data= await response.json();
        return data[0];
    }    
}

//coment out this code //Return from section 15 #125 to #126 and apply oojs to rocoWeather to complete the project
//const key= '3RHb2BhshzIWidBzVVB255b7zWi0QpAI';

//comment out thyis code Return from section 15 #125 to #126 and apply oojs to rocoWeather to complete the project
//get weather information #103 Get Weather API Call
//const getWeather= async (id) => {
    // const base= 'http://dataservice.accuweather.com/currentconditions/v1/';
    // const query= `${id}?apikey= ${key}`;

    // const response= await fetch(base + query);
    // const data= await response.json();

    // //console.log(data);
    // return data[0];
//}


//cooment out this code - Return from section 15 #125 to #126 and apply oojs to rocoWeather to complete the project
//get city information #102 Get City API Call
//const getCity= async (city) => {        //returns a promise
    // const base= 'http://dataservice.accuweather.com/locations/v1/cities/search';
    // const query= `?apikey= ${key}&q=${city}`;           //err apiKey is apikey - goddit?

    // const response= await fetch(base + query);
    // const data= await response.json();

    // //console.log(data[0]);
    // return data[0];
//};
    // getCity('glasgow')       all test code commented out
    // .then(data => {
    //     return getWeather(data.Key);
    // }).then(data => {
    //     console.log(data);
    // })
    // .catch(error => console.log(err));
    //getWeather("328226"); used for console.log