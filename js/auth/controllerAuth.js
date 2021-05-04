
const enviar = document.getElementById('send')

enviar.onclick = ()=> {
    let nombre = document.getElementById('nombre')
    nombre = nombre.value.trim().toUpperCase()
    let apellido = document.getElementById('apellido')
    apellido = apellido.value.trim().toUpperCase()
    let nombres = `${nombre} ${apellido}`

    let email = document.getElementById('correo')
    email = email.value.trim().toUpperCase()
    let password = document.getElementById('password')
    password = password.value.trim().toUpperCase()
    let code = document.getElementById('code')
    code = code.value.trim().toUpperCase()
    
    if(nombre === "" || apellido === "" || email === "" || password === "" || code === ""){
        alert('Por favor completa TODOS los campos')
    }else{ 
    const auth = new Autenticacion()
    auth.crearCuentaEmailPass(email,password,nombres)
     }
};

