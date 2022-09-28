const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')
const milisegundo = document.getElementsByName('milisegundo')


setInterval(() => {
    const tempo = new Date()

    hora.innerHTML = tempo.getHours()
    minuto.innerHTML = tempo.getMinutes()
    segundo.innerHTML = tempo.getSeconds()
})