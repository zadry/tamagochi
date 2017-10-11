/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function(){
    comiendo = 0;
    durmiendo = 0;
    tocando = 0;
    caminando = 0;
    verTv = 0;
    estudiando = 0;
    inter = 0;
    
    empezar = document.getElementById("start");
    
    bob = document.getElementById("bob");
    comida = document.getElementById("eat");
    sleep = document.getElementById("dormir");
    guitar = document.getElementById("guitar");
    walk = document.getElementById("caminar");
    tv = document.getElementById("vertv");
    study = document.getElementById("estudiar");
    inter = document.getElementById("internet");
    comida.addEventListener("click", comer);
    sleep.addEventListener("click", dormir);
    guitar.addEventListener("click", tocar);
    walk.addEventListener("click", caminar);
    tv.addEventListener("click", verTele);
    study.addEventListener("click", estudiar);
    inter.addEventListener("click", internet);
    
    empezar.addEventListener("click", setTimeout(go, 10000));
}
function comer(e){
     e = e || window.event;
     //alert("comer");
     bob.src="comiendo.gif";
     comiendo++;
    
     
}
function dormir(e){
     e = e || window.event;
     //alert("comer");
     bob.src="sleeping.gif";
     durmiendo++;
    
}
function tocar(e){
     e = e || window.event;
     //alert("comer");
     document.getElementById("bob").src="guitar.gif";
     tocando++;
}
function caminar(e){
     e = e || window.event;
     //alert("comer");
     document.getElementById("bob").src="funk.gif";
     caminando++;
}
function verTele(e){
     e = e || window.event;
     //alert("comer");
     document.getElementById("bob").src="watchingTV.gif";
     verTv++;
}
function estudiar(e){
     e = e || window.event;
     //alert("comer");
     document.getElementById("bob").src="study.gif";
     estudiando++;
    // alert(estudiando);
}
function internet(e){
     e = e || window.event;
     //alert("comer");
     document.getElementById("bob").src="internet.gif";
     inter++;
}
function go(){
    alert("FIN haz muerto");
    ganador = [comiendo,
    durmiendo,
    tocando,
    caminando,
    verTv,
    estudiando,
    inter];
    max = 0;
    aux = 0;
    
    for(i = 1; i < 6;i++){
        if(aux < ganador[i]){
            aux = ganador[i];
            max = i;
            //alert("entro al siclo")
        }
    }
    
    switch(max){
        case 0: 
            document.getElementById("info").innerHTML="Moriras de un infarto";
            break;
        case 1: 
            document.getElementById("info").innerHTML="Moriras de flogera";
            break;
        case 2: 
            document.getElementById("info").innerHTML="Moriras haciendo lo que te gusta";
            break;
        case 3: 
            document.getElementById("info").innerHTML="Habras viajado mucho cuando hayas muerto";
            break;
        case 4: 
            document.getElementById("info").innerHTML="Moriras sin hacer nada de tu vida";
            break;
        case 5: 
            document.getElementById("info").innerHTML="Moriras siendo un erudito";
            break;
        case 6: 
            document.getElementById("info").innerHTML="Moriras sin haber visto nunca la luz del dia";
            break;
        default:
            break;
    }
    
    comiendo = 0;
    durmiendo = 0;
    tocando = 0;
    caminando = 0;
    verTv = 0;
    estudiando = 0;
    inter = 0;
    
    
    
}