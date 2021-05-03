
const enviar = document.getElementById('send')

enviar.onclick = () => {
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const nombres = `${nombre.value} ${apellido.value}`
    const email = document.getElementById('correo')
    const password = document.getElementById('password')
    const code = document.getElementById('code')
    
    if(nombre.value === "" || apellido.value === "" || email.value === "" || password.value === "" || code.value === ""){
        alert('Por favor completa TODOS los campos')
    }else{ 
    const auth = new Autenticacion()
    auth.crearCuentaEmailPass(email.value,password.value,nombres)
     }
};