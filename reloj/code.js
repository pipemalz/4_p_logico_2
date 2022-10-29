let reloj_div = document.getElementById('reloj')
let horas_p = document.getElementById('horas')
let minutos_p = document.getElementById('minutos')
let segundos_p = document.getElementById('segundos')
let horas = 0
let minutos = 0
let segundos = 0
let dias = 0

function reloj(){

    if(horas < 10){
        horas_p.innerHTML = `0${horas}`
    }else{
        horas_p.innerHTML = horas
    }
    if(minutos < 10){
        minutos_p.innerHTML = `0${minutos}`
    }else{
        minutos_p.innerHTML = minutos
    }
    if(segundos < 10){
        segundos_p.innerHTML = `0${segundos}`
    }else{
        segundos_p.innerHTML = segundos
    }

    console.log(`H: ${horas} M: ${minutos} S:${segundos} dia: ${dias}`)

    segundos += 1
    if(segundos == 60){
        segundos = 0
        minutos += 1
    }
    if(minutos == 60){
        minutos = 0
        horas += 1
    }
    if(horas == 24){
        segundos = 0
        minutos = 0
        horas = 0
        dias += 1
    }
}

function iniciar (){
    let intervalo = setInterval(reloj, 1000)
}

iniciar()