const $btnSignIn = document.querySelector(".sign-in-btn"),
      $btnSignUp = document.querySelector(".sign-up-btn"),
      $signUp = document.querySelector(".sign-up"),
      $signIn = document.querySelector(".sign-in");

      document.addEventListener("click", e => {
        if(e.target === $btnSignIn || e.target === $btnSignUp){
            $signIn.classList.toggle("active");
            $signUp.classList.toggle("active")
        }
      })
//------------------------------------------------------------------------------------
class userNew{
  constructor (el){
    this.user = el.user;
    this.pass = el.pass;
    this.billetera = el.billetera
  }
}

//Cuadro de inicio de sesion exitoso
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

//Registrarse
let newUsername = document.getElementById("ruser")
let newPassword = document.getElementById("rpass")
let NewUser;
const registerSend = document.getElementById("rsend")

registerSend.onclick = () =>{
  if(newUsername.value !== "" && newPassword.value !== ""){
    NewUser = new userNew (newUsername, newPassword, 0)
    Toast.fire({
      icon: 'success',
      title: '<p class="signd">Debes iniciar sesion</p>'
    })
  }else{
    Toast.fire({
      icon: 'warning',
      title: '<p class="signd">Debes registrarte</p>'
    })
  }

}
console.log(NewUser)

//Iniciar sesion
let username = document.getElementById("user")
let password = document.getElementById("pass")
const send = document.getElementById("send")

let NombreUsuario = localStorage.getItem("usuario")
let ContraUsuario = localStorage.getItem("password")

send.addEventListener("click", () =>{
  
  if(newUsername.value === username.value && newPassword.value === password.value){
    Toast.fire({
      icon: 'success',
      title: '<p class="signd">Signed in successfully</p>'
    })
    localStorage.setItem("usuario", username.value)
    localStorage.setItem("password", password.value)
    setInterval(() => {
      window.location.replace("./pages/main.html")
    }, 3000);
    
  }else{
    Toast.fire({
      icon: 'warning',
      title: '<p class="signd">Datos incorrectos</p>'
    })
  }

} )

const redireccionar = () =>{
  if(!!NombreUsuario && !!ContraUsuario){    //si existen redireccionar
      window.location.replace("./pages/main.html")
  }
}

//Invocando funciones
redireccionar();
