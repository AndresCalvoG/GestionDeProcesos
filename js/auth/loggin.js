const ingresar = document.getElementById('loggin')

ingresar.onclick = ()=> {
    let email = document.getElementById('user')
    email = email.value.trim().toUpperCase()
    let password = document.getElementById('pass')
    password = password.value.trim().toUpperCase()
    
    if( email === "" || password === "" ){
        alert('Por favor completa TODOS los campos')
    }else{ 
        console.log(email, password)
    const auth = new Autenticacion()
    auth.autEmailPass(email, password)
    }
};