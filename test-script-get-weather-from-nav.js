function confirmarGeolocNavegador(){
    let resultado = confirm("Autorizo o navegador a obter informações sobre minha localização.");
    if (resultado === true){
        obterGeolocNavegador();
    } else {
        alert("Ok, pode inserir sua localização manualmente.");
    }
}

function obterGeolocNavegador(){

    if ("geolocation" in navigator) {

        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(function(position) {
        
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            obterDadosClima(lat, lon);
        });
        
    } else {
        alert("O serviço de geolocalização não é suportado pelo seu navegador =( Mas você ainda pode inserir sua localização manualmente.");
    }
}

function obterDadosClima(lat, lon){
   console.log(lat);
   console.log(lon);

   // restante da função
}

//confirmarGeolocNavegador(); 
// deve ser executado com onclick="confirmarGeolocNavegador()"