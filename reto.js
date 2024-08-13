const usersDatabase=[
    {username:"andres",password:"123",},
    {username:"caro",password:"456",},
    {username:"mariana",password:"789",},
];
const usersTimeline=[
    {username:"Estefany",timeline:"Me encata Javascript!",},
    {username:"Oscar",timeline:"Bebeloper es lo mejor!",},
    {username:"Mariana",timeline:"A mi me gusta más el café que el té",},
    {username:"Andres",timeline:"Yo hoy no quiero trabajar",},
];

const usuario = prompt("Digite el nombre de usuario: ")
const contraseña = prompt("Digita la contraseña: ")

function validarAcceso(usuario, contraseña){
    for (let i = 0; i < usersDatabase.length; i++) {
        if (usersDatabase[i].username === usuario && usersDatabase[i].password === contraseña) {
            return true
        }
    }
    return false
    
}

function acceso (usuario, contraseña){
    if (validarAcceso(usuario, contraseña)) {
        alert(`Bienvenido a su cuenta ${usuario}`)
        console.log(usersTimeline)
    }else{
        alert("USsuario y/o contraseña incorrectos")
    }
}

acceso(usuario,contraseña);