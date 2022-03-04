function renderizarTelaPrincipal(informacoesClima){
    const tempo = document.querySelector('.tempo');
    tempo.innerHTML = `
        <article class="principal">
            <h3>${informacoesClima.cidade}</h3>
            <h2>${informacoesClima.descricao}</h2>
            <div>
                <img src="${informacoesClima.imagem}" alt="imagem ${informacoesClima.descricao}">
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