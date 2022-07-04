const pesos = document.getElementById("pesos")
const dolares = document.getElementById("dolares")
const cte = document.getElementById("cte")
const select = document.querySelector(".contentdepositos")
const deposito = document.querySelector(".form")
const lateral = document.querySelector(".ul")

pesos.addEventListener("click", () =>{
    // const div = document.createElement("div")
    deposito.innerHTML = `<div class="jscriptsection">
    <p>Seleccionaste Caja de Ahorro en Pesos</p>
    <label for="monto">Monto</label>
    <input type="text" id="monto">
    <input type="submit" id="submit" onClick=send() value="Transferir">
</div>`
})

dolares.addEventListener("click", (e) => {
    deposito.innerHTML = `<div class="jscriptsection">
    <p>Seleccionaste Caja de Ahorro en Dolares</p>
    <label for="monto">Monto</label>
    <input type="text" id="monto">
    <input type="submit" id="submit" onClick=sendusd() value="Transferir">
</div>`
})

cte.addEventListener("click", () =>{
    deposito.innerHTML = `<div class="jscriptsection">
    <p>Seleccionaste Cuenta corriente</p>
    <label for="monto">Monto</label>
    <input type="text" id="monto">
    <input type="submit" id="submit" onClick=sendcte() value="Transferir">
</div>`
})


function sendcte (){
    const monto = document.getElementById("monto").value
    const li = document.createElement("li")
    li.innerHTML = `<p>Has depositado $${monto}  en tu cuenta corriente</p>`
    lateral.append(li)
}




function send () {
    const monto = document.getElementById("monto").value
    const li = document.createElement("li")
    li.innerHTML = `<p>Has depositado $${monto}  en caja de ahorro en Pesos</p>`
    lateral.append(li)
}

const sendusd = () =>{
    const monto = document.getElementById("monto").value
    const li = document.createElement("li")
    li.innerHTML = `<p>Has depositado $${monto}  en caja de ahorro en Dolares</p>`
    lateral.append(li)
}