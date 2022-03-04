function enviarWhatsapp(){ // deve ser executada com onclick

    let celular = prompt("Insira seu número do WhatsApp com DDD (mas sem traços e sem (), apenas números):\n\nExemplo: 55912341234\n");

    let text = `
    Confira o tempo na cidade de ${cidade} hoje:

    Descrição: ${descricao}
    Temperatura agora: ${tempAgora}
    Máxima: ${tempMax}
    Mínima: ${tempMin}
    mm de Chuva na última hora: ${chuva}
    `;

    text = window.encodeURIComponent(text);

    let cellNumber = "55"+celular;
    window.open("https://wa.me/" + cellNumber + "?text=" + text, "_blank");

}