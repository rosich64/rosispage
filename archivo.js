
     
var nombre= document.getElementById("fname");
var apellido= document.getElementById("lname");
var password= document.getElementById("password");
var error= document.getElementById("error");






function enviarFormulario (){
    
    var mensajesError=[];
  

    if (nombre.value=== null || nombre.value=== ""  ){
        
      
        mensajesError.push ("Nombre ");
       
    }

    if (nombre.value   == 1 || nombre.value== 2 ){
        document.getElementById("small").innerHTML=("solo letras")
        
      
            mensajesError.push ("not number ");
     
  }
    if (apellido.value=== null || apellido.value=== ""){
      
        mensajesError.push (" Apellido ");
    }

    if ( password.value=== null || password.value===""){
      mensajesError.push (" Password ");
    }

    if ( email.value=== null || email.value===""){
        mensajesError.push (" email ");
      }

    document.getElementById ("etiq").innerHTML=  ("Falta ingresar : " + mensajesError.join(","));
    


    return false;
}   
    
  