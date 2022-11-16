const current =document.querySelector("#current");

const imgs=document.querySelector(".imgs");

const img =document.querySelectorAll(".imgs img");

const opacity = 0.6;

img[0].style.opacity=opacity;

imgs.addEventListener("click",(event)=>{

    img.forEach((imgElem)=>(imgElem.style.opacity=1));

    current.src=event.target.src;

    current.classList.add("fade-in");

    setTimeout( () =>  {

        current.classList.remove("fade-in");

    }, 600);

        event.target.style.opacity=opacity;
});