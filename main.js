// server-room-horror - Sistema principal del servidor
const nomServidor = "SRV-HALLOWEEN-01";
let modeServidor = "santuari-protegit";

function iniciarSistema() {
  console.log(`Iniciant ${nomServidor} en mode ${modeServidor}`);
}

function bloquejarPortes() {
  console.log("Portes blindades de la sala de servidors bloquejades");
}

function alarmaTemperatura(temperatura) {
  if (temperatura < 10) {
    console.log("ALERTA: temperatura anòmala a la sala de servidors");
  }
}

iniciarSistema();
bloquejarPortes();
alarmaTemperatura(4);