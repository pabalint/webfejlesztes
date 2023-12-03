window.addEventListener(`load`, ora);

function ora(){
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    let kiir = ``;
    if (month + 4 > 12) {kiir = `${year + 1}-${month - 8}-${day}`; }
    else {kiir = `${year}-${month + 4}-${day}` };
    document.getElementById("ora").innerHTML = `Rendelje meg még ma a szoftverét!<br/> Várható elkészülési idő: ${kiir}`;
}

document.getElementById("modul1").addEventListener("click", hatter1);
document.getElementById("modul2").addEventListener("click", hatter2);
document.getElementById("modul3").addEventListener("click", hatter3);
document.getElementById("modul4").addEventListener("click", hatter4);
document.getElementById("modul5").addEventListener("click", hatter5);
document.getElementById("modul6").addEventListener("click", hatter6);
document.getElementById("modul7").addEventListener("click", hatter7);
document.getElementById("modul8").addEventListener("click", hatter8);
document.getElementById("modul9").addEventListener("click", hatter9);
document.getElementById("modul10").addEventListener("click", hatter10);
document.getElementById("alap").addEventListener("click", alapba);

function hatter1(){
    if(document.getElementById("modul1").checked){document.getElementById("mart1").style.border='thick solid #11898d';}
    else{document.getElementById("mart1").style.borderWidth='0';}
}

function hatter2(){
    if(document.getElementById("modul2").checked){document.getElementById("mart2").style.border='thick solid #11898d';}
    else{document.getElementById("mart2").style.borderWidth='0';}
}

function hatter3(){
    if(document.getElementById("modul3").checked){document.getElementById("mart3").style.border='thick solid #11898d';}
    else{document.getElementById("mart3").style.borderWidth='0';}
}

function hatter4(){
    if(document.getElementById("modul4").checked){document.getElementById("mart4").style.border='thick solid #11898d';}
    else{document.getElementById("mart4").style.borderWidth='0';}
}

function hatter5(){
    if(document.getElementById("modul5").checked){document.getElementById("mart5").style.border='thick solid #11898d';}
    else{document.getElementById("mart5").style.borderWidth='0';}
}

function hatter6(){
    if(document.getElementById("modul6").checked){document.getElementById("mart6").style.border='thick solid #11898d';}
    else{document.getElementById("mart6").style.borderWidth='0';}
}

function hatter7(){
    if(document.getElementById("modul7").checked){document.getElementById("mart7").style.border='thick solid #11898d';}
    else{document.getElementById("mart7").style.borderWidth='0';}
}

function hatter8(){
    if(document.getElementById("modul8").checked){document.getElementById("mart8").style.border='thick solid #11898d';}
    else{document.getElementById("mart8").style.borderWidth='0';}
}

function hatter9(){
    if(document.getElementById("modul9").checked){document.getElementById("mart9").style.border='thick solid #11898d';}
    else{document.getElementById("mart9").style.borderWidth='0';}
}

function hatter10(){
    if(document.getElementById("modul10").checked){document.getElementById("mart10").style.border='thick solid #11898d';}
    else{document.getElementById("mart10").style.borderWidth='0';}
}

function alapba(){
    for(i=1; i<11; i++){
        document.getElementById("mart" + i).style.borderWidth='0';
    }
}

document.getElementById("kalkulal").addEventListener("click", szamol);

function szamol(){
    let ar = 1;

    const alkalmazottak = document.getElementById("alkalmazott").selectedIndex;
    const arbevetel = document.getElementById("bevetel").selectedIndex;
    const telephelyek = document.getElementById("telep").value;
    const tudas = document.getElementById("tud").value;

    let rendszervan = false;
    if(document.getElementById("rvan").checked){rendszervan = true;}
    let uzemeltetes = false;
    if(document.getElementById("uzemigen").checked){uzemeltetes = true;}
    let kepzes = false;
    if(document.getElementById("kepzesigen").checked){kepzes = true;}

    const nyelv = document.getElementById("nyelv").value;

    let modulszam = 0;
    for(i=1; i<11; i++){
        if(document.getElementById("modul" + i).checked){modulszam++;}
    }

    const alk = [0, 1, 2, 3, 4, 7, 10];
    ar = ar + alk[alkalmazottak];

    const arb = [0, 1, 2, 3, 4, 7, 10];
    ar = ar + arb[arbevetel];

    ar = ar + 0.5 * (telephelyek-1);

    if(kepzes == true){ar = ar + (6-tudas)*0.5;}

    if(rendszervan == false){ar = ar + (0.1 * modulszam);}

    ar = ar + (nyelv-1) * 0.3;

    modular = Math.round((Number(alkalmazottak) + Number(arbevetel) + Number(telephelyek) + 2)/3);
    modularak = [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.10, 0.11, 0.12];
    ar = ar + modulszam * modularak[modular-1];
    
    if(uzemeltetes == true){ar = ar * 0.9;}

    ar = ar.toFixed(2);
    const kikuld = `A kalkulált ár: ${ar} millió forint <br/> Figyelem! Az ár csupán tájékoztató jellegű! Végleges ajánlatért vegye fel velünk a <a href="kapcsolat.html">kapcsolatot<a/>! `
    document.getElementById("arajanlat").innerHTML = kikuld;
}