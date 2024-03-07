function inversion() {
    // Variables
    let cNombres = document.getElementById("nombres").value;
    let cTelefono = document.getElementById("telefono").value;
    let cCorreo = document.getElementById("email").value;
    let contPre = document.querySelector(".pre-simulation");
    let contPost = document.querySelector(".post-simulation");
    let cMonto = document.getElementById("inversion").value;
    let cTiempo = document.getElementById("tiempo").value;

    // Mostramos y ocultamos el panel de la derecha, pre y post simulacion
    contPost.classList.remove("disabled");
    contPre.classList.add("disabled");


    // Capturamos los espacios para nombrar el nombre y email
    document.querySelector("#nombres-show").innerHTML = cNombres;
    document.querySelector("#email-show").innerHTML = cCorreo;

    // existen dos formas de insertar los textos en el HTML:
    // 1. let sTiempo = document.getElementById("tiempo-show");
    // sTiempo.innerHTML = "12 Meses";
    // 2. document.querySelector("#tiempo-show").innerHTML = "12 Meses";

    switch (cTiempo) {
        case '1':
            document.querySelector("#tiempo-show").innerHTML = "12 Meses";
            document.querySelector("#interes-show").innerHTML = "0.8%";
            let G1 = parseInt(cMonto * 0.096);
            let totalG1 = parseInt(cMonto) + parseInt(G1);
            document.querySelector("#total-show").innerHTML = totalG1;
            document.querySelector("#ganancia-show").innerHTML = G1;
            break;
        case '2':
            document.querySelector("#tiempo-show").innerHTML = "24 Meses";
            document.querySelector("#interes-show").innerHTML = "1.3%";
            let G2 = parseInt(cMonto * 0.312);
            let totalG2 = parseInt(cMonto) + parseInt(G2);
            document.querySelector("#total-show").innerHTML = totalG2;
            document.querySelector("#ganancia-show").innerHTML = G2;
            break;
        case '3':
            document.querySelector('#tiempo-show').innerHTML = "36 Meses";
            document.querySelector("#interes-show").innerHTML = "1.7%";
            let G3 = parseInt(cMonto * 0.612);
            let totalG3 = parseInt(cMonto) + parseInt(G3);
            document.querySelector("#total-show").innerHTML = totalG3;
            document.querySelector("#ganancia-show").innerHTML = G3;
        default:
            break;
    }



    // alert ("Bienvenido usuario " + cNombres + " Su telefono es: " + cTelefono);
    // console.log("Bienvenido usuario " + cNombres + " Su telefono es: " + cTelefono);

    // let i = 100;
    // while (i >= 0){
    //     console.log(i);
    //     alert (i);
    //     i--;
    // }


}