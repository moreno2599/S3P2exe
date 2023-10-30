let newtitle = document.querySelector("h1")
newtitle.innerText="Winederfull";

let background= function (colore){
    let color= document.querySelector("body");
    color.style.background =colore ;
};
background("gold");

const indirizzonew = function(){
    let indirizzo=document.querySelector("p")
    indirizzo.textContent= "ci stiamo trasferendo in via fittizzio 76";
};

const aggiungiclasse = function(){
    let ogniA= document.querySelector("a")
    for(let i=0; i< ogniA.length; i++){
        let unA = ogniA[i];
        unA.classlist.add("classelink");
    }
};
