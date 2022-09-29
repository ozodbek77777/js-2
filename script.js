
const piyoda = 20;
const veli = 40;
const avto = 60;
const samalyot = 800;

const btn = document.querySelector("#value")
const li = document.querySelector("#li")
const li2 = document.querySelector("#li2")
const li3 = document.querySelector("#li3")
const li4 = document.querySelector("#li4")

const button = document.querySelector("#button")
const p = document.createElement("p")
const p2 = document.createElement("p")
const p3 = document.createElement("p")
const p4 = document.createElement("p")

button.addEventListener("click", () => {
    p.innerText = Math.floor(bolish()) + " " + 'SOAT'
    p.style.fontSize = '30px'
    p2.textContent = Math.floor(bolish1()) + " " + 'SOAT'
    p2.style.fontSize = '30px'
    p3.textContent = Math.floor(bolish2()) + " " + 'SOAT'
    p3.style.fontSize = '30px'
    p4.textContent = Math.floor(bolish3()) + " " + 'SOAT'
    p4.style.fontSize = '30px'
    li.append(p)
    li2.append(p2)
    li3.append(p3)
    li4.append(p4)
})

function bolish() {
    if (btn.value > 9999) {
        return 0
    }
    const piyoda1 = btn.value / piyoda
    return piyoda1
}
function bolish1() {
    if (btn.value > 9999) {
        return 0
    }
    const piyoda1 = btn.value / veli
    return piyoda1
}
function bolish2() {
    if (btn.value > 9999) {
        return 0
    }
    const piyoda1 = btn.value / avto
    return piyoda1
}
function bolish3() {
    if (btn.value > 9999) {
        return 0
    }
    const piyoda1 = btn.value / samalyot
    return piyoda1
}
