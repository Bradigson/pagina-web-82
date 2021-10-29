//================efecto parallax=============
document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll(".layer").forEach(layer=>{
        const speed = layer.getAttribute("data-speed")

        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window,innerHeight - e.pageY*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

//=======================straer el txt y proesarlo a JSON========================
function json(){
    const jhttp = new XMLHttpRequest();
    jhttp.open('GET', 'js/1_0,2_0,0_201815.txt', true);
    jhttp.send();

    jhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let c1datos = JSON.stringify(this.responseText);
            let c2datos = JSON.parse(c1datos);
            let jalert = document.querySelector("#jalert");
            let p = document.querySelector("#p");
            for(let i=0; i<c2datos.length; i++){
                jalert.style.display = "flex";
                jalert.style.transition = "all 1s";
                p.innerText = "Datos procesados a JSON excitosamente!!!";
                document.querySelector("#ajax").addEventListener("click", ajax);

                
            }
        }
    }
}
let btnJson = document.querySelector("#json");
btnJson.addEventListener("click", json);

let btnClose = document.querySelector("#close");
btnClose.onclick = function(){
    let jalert = document.querySelector("#jalert");
    jalert.style.display = "none";
}


//========================mostrar datos con ajax============================
function ajax(){
    const ahttp = new XMLHttpRequest();
    ahttp.open('GET','js/1_0,2_0,0_201815.txt',true);
    ahttp.send();
    ahttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let showDatos = JSON.stringify(this.responseText);
            let showDatos2 = JSON.parse(showDatos);
            let result = document.querySelector("#result");
            for(let item of showDatos2){
                result.textContent += item;
            }
        }
    }
}