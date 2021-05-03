
const enviar = document.getElementById('send')

enviar.onclick = () => {
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const nombres = `${nombre.value} ${apellido.value}`
    const email = document.getElementById('correo')
    const password = document.getElementById('password')
    
    const auth = new Autenticacion()
    auth.crearCuentaEmailPass(email.value,password.value,nombres)
};