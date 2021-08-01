const ingresar = document.getElementById('loggin')
const fault = document.getElementById('error')

ingresar.onclick = ()=> {
    let email = document.getElementById('user')
    email = email.value.trim().toUpperCase()
    let password = document.getElementById('pass')
    password = password.value.trim().toUpperCase()
    
    if( email === "" || password === "" ){
        fault.innerText = "Por favor completa TODOS los campos"
        fault.style.display = "block"
    }else{ 
        fault.innerText = " "
        const auth = new Autenticacion()
        auth.autEmailPass(email, password)
    }
};