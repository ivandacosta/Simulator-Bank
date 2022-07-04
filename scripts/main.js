const monto = document.querySelector("#monto")
const cbu = document.querySelector("#cbu")
const send = document.querySelector(".send")
const elementP = document.querySelector(".enviadas")

//swal
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


send.addEventListener("click", () =>{
    if(monto.value !== ""){
        CrearTabla();
        Toast.fire({
            icon: 'success',
            html: `<p class="swaljs">Has transferido $${monto.value}🤑</p>`
          })
    }else{
        Toast.fire({
            icon: 'warning',
            html: `<p class="swaljs"> Debes ingresar los datos solicitados</p>`
          })
    }
})

const CrearTabla = () => {
    let li = document.createElement("li")
    li.innerHTML = `<p>Transferiste 💸<strong>$${monto.value}</strong> a <strong>${cbu.value}</strong> </p>`
    elementP.append(li)
}

let logout = document.querySelector(".logout")
let NombreUsuario = localStorage.getItem("usuario")
let ContraUsuario = localStorage.getItem("password")

logout.addEventListener("click", ()=>{
  if(!!NombreUsuario && !!ContraUsuario){
    window.location.replace("../index.html")
    localStorage.removeItem("usuario")
    localStorage.removeItem("password")
  }
  })