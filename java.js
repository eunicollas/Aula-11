function soma(){
    let numero1 = document.querySelector('#primeiro');
    let numero2 = document.querySelector('#segundo');
    let ola = document.querySelector('#ola')
    ola.innerHTML = `${numero1.value} + ${numero2.value} = ${parseInt(numero1.value) + parseInt(numero2.value)}`
}
function subtraçao(){
    let numero1 = document.querySelector('#primeiro');
    let numero2 = document.querySelector('#segundo');
    let ola = document.querySelector('#ola')
    ola.innerHTML = `${numero1.value} - ${numero2.value} = ${numero1.value - numero2.value}`
}function multiplicaçao(){
    let numero1 = document.querySelector('#primeiro');
    let numero2 = document.querySelector('#segundo');
    let ola = document.querySelector('#ola')
    ola.innerHTML = `${numero1.value} * ${numero2.value} = ${numero1.value * numero2.value}`
}function divisao(){
    let numero1 = document.querySelector('#primeiro');
    let numero2 = document.querySelector('#segundo');
    let ola = document.querySelector('#ola')
    ola.innerHTML = `${numero1.value} / ${numero2.value} = ${numero1.value / numero2.value}`
}