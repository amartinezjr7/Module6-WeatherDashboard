var apiKey = "5db6491e1a75cf8610ef615e5912b0ea";
var lat = "";
var lon = "";
var city = "";



var form = document.querySelector(".container form");


$("#select-city").on("click", function (event) {
    event.preventDefault();
    city = $("#city-input").val().trim();
    var textContent = $(this).siblings("input").val();
    var storeArr = [];
    storeArr.push(textContent);
    localStorage.setItem('cityName', JSON.stringify(storeArr))
    console.log(storeArr[0]);

    findCity(city);
});

function findCity(){
    var WUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
    
    
    $.ajax({
        url: WUrl,
        method: 'GET'
    }).then(function (data) {
        console.log(data);
        console.log(WUrl);
        $("#current").empty();

        lat = data.coord.lat;
        lon = data.coord.lon;
        findLatLon(lat,lon);
        console.log(lat);
    })

}

function findLatLon(){
    var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+apiKey;

    $.ajax({
        url:oneCallUrl,
        method:'GET'
    }).then(function(data){
        console.log(data);
    })
}
