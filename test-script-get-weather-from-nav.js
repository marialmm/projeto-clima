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
    const promessa = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f25110b0f83adb9f7c080ee182cd1d00`);
    promessa.then(filtrarInformacoes);

   // restante da função
}

function filtrarInformacoes(resposta){
    const informacoes = resposta.data;
    console.log(informacoes)
    const informacoesClima = {
        cidade: informacoes.name,
        descricao: informacoes.weather[0].description,
        imagem: informacoes.weather[0].icon,
        temperatura: (informacoes.main.temp - 273.15).toFixed(0),
        sensacao: (informacoes.main.feels_like - 273.15).toFixed(0),
        maxima: (informacoes.main.temp_max - 273.15).toFixed(0),
        minima: (informacoes.main.temp_min - 273.15).toFixed(0),
        visibilidade: informacoes.clouds.all,
        vento: informacoes.wind.speed,
        umidade: informacoes.main.humidity
    }
    renderizarTelaPrincipal(informacoesClima);
}

function renderizarTelaPrincipal(informacoesClima){
    const tempo = document.querySelector('.tempo');
    tempo.innerHTML = `
        <article class="principal">
            <h3>${informacoesClima.cidade}</h3>
            <h2>${informacoesClima.descricao}</h2>
            <div>
                <img src="http://openweathermap.org/img/wn/${informacoesClima.imagem}@2x.png" alt="imagem ${informacoesClima.descricao}">
                <h1>${informacoesClima.temperatura} °C</h1>
            </div>
        </article>

        <article class="temperaturas">
            <p>Sensação: ${informacoesClima.sensacao} °C</p>
            <div class="max-min">
                <p class="max">Max: ${informacoesClima.maxima} °C</p>
                <p class="min">Min: ${informacoesClima.minima} °C</p>
            </div>
        </article>

        <article class="outros">
            <p class="visibilidade">Visibilidade: ${informacoesClima.visibilidade}%</p>
            <p class="vento">Vento: ${informacoesClima.vento} m/s</p>
            <p class="umidade">Umidade: ${informacoesClima.umidade}%</p>
        </article>
    `
}


confirmarGeolocNavegador(); 
//confirmarGeolocNavegador(); 
// deve ser executado com onclick="confirmarGeolocNavegador()"