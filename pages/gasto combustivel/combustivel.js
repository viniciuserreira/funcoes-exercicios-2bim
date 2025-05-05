function gasto(tempo, velocidade){
    return (tempo*velocidade)/12
}

let gasto1 = gasto(10, 85)
let gasto2 = gasto(2, 92)
let gasto3 = gasto(22, 67)

console.log(`${gasto1.toFixed(3)}`)
console.log(`${gasto2.toFixed(3)}`)
console.log(`${gasto3.toFixed(3)}`)