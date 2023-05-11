let btna = document.getElementById("a");
let btnb = document.getElementById("b");
let btnc = document.getElementById("c");
let div1 = document.getElementById("div1");
let divbtnb = document.getElementById("btnb");
let divbtnc = document.getElementById("btnc");
let trueee= true;
btna.addEventListener('click', ()=>{
   
        div1.style.display = "block";
        divbtnb.style.display = "none";
        divbtnc.style.display = "none";
});


btnb.addEventListener('click', ()=>{
    divbtnb.style.display = "block";
    div1.style.display = "none";
    divbtnc.style.display = "none";
});


btnc.addEventListener('click', ()=>{
    divbtnc.style.display = "block";
    div1.style.display = "none";
    divbtnb.style.display = "none";
});
