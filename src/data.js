export const API_KEY = "AIzaSyBeMC8ne6Q-eJIcBQTZoYIE3PqqJ4gIVGg";   

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}