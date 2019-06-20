$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=-33.4378&lon=-70.6505&APPID=f1d1a38a857294c103707368b78133aa&units=metric",function(data){
    //Convertir temperatura 
    var temp = data.main.temp;
    var nt = temp.toString();
    var st = nt.split(".")[0];
    $("#tempe").text(st+"°");
    console.log(data);
    
    // Icono
    console.log(data.weather.icon);
    var url = "http://openweathermap.org/img/w/";
    
});